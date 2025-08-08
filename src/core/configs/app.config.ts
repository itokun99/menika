import Config from 'react-native-config';

export const APP_CONFIG = {
  api: {
    baseUrl: Config.API_BASE_URL || '',
  },
} as const;
