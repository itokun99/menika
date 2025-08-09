import { PropsWithChildren } from 'react';
import {
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { colors, fontFamilies } from '@core/styles';

// theme setup
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);

export const appTheme = merge(CombinedDefaultTheme, {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    success: colors.success,
  },
  fonts: configureFonts({
    config: {
      fontFamily: fontFamilies.regular,
    },
    isV3: true,
  }),
});

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};
