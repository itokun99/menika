import { Json, Logger } from '@core/utils';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

// app query client
export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // disable retry
      staleTime: 1000 * 60 * 5, // 5 minutes for handling data state in mobile app
      gcTime: 1000 * 60 * 30, // 30 minutes for keeping state in memory
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0, // disable retry for mutation
    },
  },
  queryCache: new QueryCache({
    onError: err => {
      Logger.error('query error', err);
    },
    onSuccess: data => {
      Logger.log('query success', Json.safeJsonStringify(data));
    },
  }),

  mutationCache: new MutationCache({
    onError: err => {
      Logger.error('mutation error', err);
    },
    onSuccess: data => {
      Logger.log('mutations success', Json.safeJsonStringify(data));
    },
  }),
});
