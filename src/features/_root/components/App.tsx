import { AppQueryProvider } from '@core/libs';
import { NetworkStatusIndicator } from '@features/_global';
import { StatusBar, useColorScheme } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const AppComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'red'}
      />
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
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AppQueryProvider>
          <AppComponent />
        </AppQueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
