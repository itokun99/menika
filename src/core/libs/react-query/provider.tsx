import { QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren, useEffect } from 'react';
import { appQueryClient } from './config';
import { AppState } from 'react-native';
import { onAppStateChange, setupOnlineManager } from './utils';

export const AppQueryProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    setupOnlineManager();
    const subs = AppState.addEventListener('change', onAppStateChange);
    return () => {
      subs.remove();
    };
  }, []);

  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
