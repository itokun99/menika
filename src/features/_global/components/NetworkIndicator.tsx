import React, { useEffect, useRef } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Logger } from '@core/utils';
import { showMessage } from 'react-native-flash-message';

export const NetworkStatusIndicator = React.memo(() => {
  const wasOffline = useRef(false);

  useEffect(() => {
    const unsubs = NetInfo.addEventListener(state => {
      Logger.log(state);
      if (!state.isConnected) {
        showMessage({
          message: 'Connection Lost!, you are currently offline',
          type: 'warning',
        });
        wasOffline.current = true;
        return;
      }

      if (state.isConnected && wasOffline.current) {
        showMessage({
          message: 'Back online!',
          type: 'success',
        });
        wasOffline.current = false;
      }
    });

    showMessage({
      message: 'You are connected!',
      type: 'success',
    });

    return () => {
      unsubs();
    };
  }, []);

  return null;
});
