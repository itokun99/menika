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

const baseFont = {
  fontFamily: fontFamilies.regular,
};

export const appTheme = merge(CombinedDefaultTheme, {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    success: colors.success,
  },
  fonts: configureFonts({
    config: {
      displayLarge: { ...baseFont, fontFamily: fontFamilies.bold },
      displayMedium: { ...baseFont, fontFamily: fontFamilies.bold },
      displaySmall: { ...baseFont, fontFamily: fontFamilies.bold },
      headlineLarge: { ...baseFont, fontFamily: fontFamilies.bold },
      headlineMedium: { ...baseFont, fontFamily: fontFamilies.bold },
      headlineSmall: { ...baseFont, fontFamily: fontFamilies.bold },
      titleLarge: { ...baseFont, fontFamily: fontFamilies.bold },
      titleMedium: { ...baseFont, fontFamily: fontFamilies.bold },
      titleSmall: { ...baseFont, fontFamily: fontFamilies.bold },
      bodyLarge: { ...baseFont },
      bodyMedium: { ...baseFont },
      bodySmall: { ...baseFont },
      labelLarge: { ...baseFont, fontFamily: fontFamilies.medium },
      labelMedium: { ...baseFont, fontFamily: fontFamilies.medium },
      labelSmall: { ...baseFont, fontFamily: fontFamilies.medium },
    },
    isV3: true,
  }),
});

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};
