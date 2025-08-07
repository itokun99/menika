function safeJsonParse<T>(
  jsonString: string | null | undefined,
  fallbackValue: any = null,
): T {
  if (typeof jsonString !== 'string') {
    return fallbackValue;
  }

  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    return fallbackValue;
  }
}

function safeJsonStringify(value: any, fallbackValue: string = '{}'): string {
  try {
    return JSON.stringify(value);
  } catch (error) {
    // This typically catches "TypeError: converting circular structure to JSON"
    return fallbackValue;
  }
}

export const Json = {
  safeJsonParse,
  safeJsonStringify,
};
