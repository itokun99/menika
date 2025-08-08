import BootSplash from 'react-native-bootsplash';

export const nativeSplashScreen = {
  hide: () =>
    BootSplash.hide({
      fade: true,
    }),
  isVisible: BootSplash.isVisible,
};
