import { PropsWithChildren } from 'react';
import {
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);

export const appTheme = CombinedDefaultTheme;

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};
