// INFO:  https://tanstack.com/query/latest/docs/framework/react/react-native#react-native

import React from 'react';
import { NotifyOnChangeProps } from '@tanstack/query-core';

import { useFocusEffect } from '@react-navigation/native';

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch]),
  );
}

export function useFocusNotifyOnChangeProps(
  notifyOnChangeProps?: NotifyOnChangeProps,
) {
  const focusedRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, []),
  );

  return () => {
    if (!focusedRef.current) {
      return [];
    }

    if (typeof notifyOnChangeProps === 'function') {
      return notifyOnChangeProps();
    }

    return notifyOnChangeProps;
  };
}

export function useQueryFocusAware() {
  const focusedRef = React.useRef(true);
  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, []),
  );

  return () => focusedRef.current;
}
