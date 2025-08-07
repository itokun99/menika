import { PropsWithChildren } from 'react';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
