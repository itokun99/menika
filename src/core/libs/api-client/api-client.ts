type HeadersInit = HeadersInit_ | Record<string, string>;

export interface ApiClientBaseConfig {
  baseUrl?: string;
  timeout?: number;
  headers?: HeadersInit;
}

export interface RequestConfig extends Omit<ApiClientBaseConfig, 'baseUrl'> {
  params?: Record<string, string | number>; // For URL query parameters
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: RequestConfig;
}

export class ApiError extends Error {
  response?: ApiResponse;
  requestConfig?: RequestConfig;
  isTimeout: boolean;

  constructor(
    message: string,
    response?: ApiResponse,
    requestConfig?: RequestConfig,
  ) {
    super(message);
    this.name = 'ApiError';
    this.response = response;
    this.requestConfig = requestConfig;
    this.isTimeout = message === 'Request timed out';
  }
}

interface Interceptor<V> {
  fulfilled: (value: V) => V | Promise<V>;
  rejected?: (error: any) => any;
}

class InterceptorManager<V> {
  private handlers: Array<Interceptor<V> | null> = [];

  use(
    fulfilled: (value: V) => V | Promise<V>,
    rejected?: (error: any) => any,
  ): number {
    this.handlers.push({ fulfilled, rejected });
    return this.handlers.length - 1;
  }

  eject(id: number): void {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  async execute(value: V): Promise<V> {
    let currentValue = value;
    for (const handler of this.handlers) {
      if (handler) {
        try {
          currentValue = await handler.fulfilled(currentValue);
        } catch (error) {
          if (handler.rejected) {
            // Allow interceptor to handle the error
            return Promise.reject(await handler.rejected(error));
          }
          return Promise.reject(error);
        }
      }
    }
    return currentValue;
  }
}

export class ApiClient {
  private config: ApiClientBaseConfig;
  public interceptors: {
    request: InterceptorManager<RequestConfig>;
    response: InterceptorManager<ApiResponse>;
  };

  constructor(config: ApiClientBaseConfig = {}) {
    this.config = {
      timeout: 15000, // Default timeout of 15 seconds
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    };
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  static create(config?: ApiClientBaseConfig): ApiClient {
    return new ApiClient(config);
  }

  private _prepareUrl(endpoint: string, config: RequestConfig): string {
    let fullUrl = `${this.config.baseUrl || ''}${endpoint}`;
    if (config.params) {
      const searchParams = new URLSearchParams();
      for (const key in config.params) {
        searchParams.append(key, String(config.params[key]));
      }
      fullUrl += `?${searchParams.toString()}`;
    }
    return fullUrl;
  }

  private _prepareBodyAndHeaders(
    data: any,
    headers: HeadersInit_,
  ): { body?: BodyInit_; headers: Headers } {
    const finalHeaders = new Headers(headers);
    let body: BodyInit_ | undefined;

    if (data) {
      if (data instanceof FormData) {
        finalHeaders.delete('Content-Type');
        body = data;
      } else if (typeof data === 'object') {
        body = JSON.stringify(data);
      }
    }
    return { body, headers: finalHeaders };
  }

  private async _request<T>(
    method: string,
    url: string,
    data?: any,
    reqConfig: RequestConfig = {},
  ): Promise<ApiResponse<T>> {
    let config: RequestConfig = {
      ...this.config,
      ...reqConfig,
      headers: { ...this.config.headers, ...reqConfig.headers },
    };

    config = await this.interceptors.request.execute(config);

    const fullUrl = this._prepareUrl(url, config);
    const { body, headers } = this._prepareBodyAndHeaders(
      data,
      config.headers || {},
    );

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout);

    let response: Response;
    try {
      response = await fetch(fullUrl, {
        method,
        headers,
        body,
        signal: controller.signal,
      });
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new ApiError('Request timed out', undefined, config);
      }
      throw new ApiError(error.message, undefined, config);
    } finally {
      clearTimeout(timeoutId);
    }

    let responseData: T | null = null;
    try {
      responseData = await response.json();
    } catch (e) {
      // TODO: Handles cases with empty or non-JSON response bodies
    }

    const apiResponse: ApiResponse<T> = {
      data: responseData as T,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config,
    };

    if (!response.ok) {
      throw new ApiError(
        `Request failed with status ${response.status}`,
        apiResponse,
        config,
      );
    }

    // 7. Run response interceptors
    return this.interceptors.response.execute(apiResponse);
  }

  public get<T>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this._request<T>('GET', url, undefined, config);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._request<T>('POST', url, data, config);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._request<T>('PUT', url, data, config);
  }

  public patch<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._request<T>('PATCH', url, data, config);
  }

  public delete<T>(
    url: string,
    config?: RequestConfig,
  ): Promise<ApiResponse<T>> {
    return this._request<T>('DELETE', url, undefined, config);
  }
}
