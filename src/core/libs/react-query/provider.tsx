import { QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren, useEffect } from 'react';
import { appQueryClient } from './config';
import { onAppStateChange, setupOnlineManager } from '.';
import { AppState } from 'react-native';

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
