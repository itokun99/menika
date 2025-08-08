import { APP_CONFIG } from '@core/configs';
import { MMKV } from 'react-native-mmkv';

export const appStorage = new MMKV({
  id: 'app-storage',
  encryptionKey: APP_CONFIG.storage.encryptionKey,
});

export const appStorageAction = {
  getAuthToken: () => appStorage.getString('authToken'),
  setAuthToken: (token: string) => appStorage.set('authToken', token),
  getShowOnboarding: () => appStorage.getBoolean('onboarding'),
  setShowOnboarding: (value: boolean) => appStorage.set('onboarding', value),
};
