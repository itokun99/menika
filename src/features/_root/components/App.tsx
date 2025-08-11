import {
  AppQueryProvider,
  AppThemeProvider,
  setupLanguageTranslation,
} from '@core/libs';
import { NetworkStatusIndicator } from '@features/_global';
import { Appearance, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { AppNavigation } from './Navigation';
import { AuthContextProvider } from '@core/states';
import { useEffect } from 'react';
import { mainColors } from '@core/styles';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// init language translation
setupLanguageTranslation();

export const AppComponent = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={mainColors.white} />
      <AppNavigation />
      <NetworkStatusIndicator />
      <FlashMessage
        position="top"
        animated
        style={[{ paddingTop: insets.top }]}
      />
    </SafeAreaProvider>
  );
};

export const App = () => {
  return (
    <AppQueryProvider>
      <AuthContextProvider>
        <AppThemeProvider>
          <GestureHandlerRootView>
            <KeyboardProvider navigationBarTranslucent statusBarTranslucent>
              <AppComponent />
            </KeyboardProvider>
          </GestureHandlerRootView>
        </AppThemeProvider>
      </AuthContextProvider>
    </AppQueryProvider>
  );
};
