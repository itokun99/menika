/**
 * @fileoverview
 * Defines the application's color palette.
 * Using a centralized color system ensures brand consistency and simplifies theming.
 */

export const mainColors = {
  primary: '#e03f3e',
  secondary: '#775655',
  tertiary: '#755a2f',
  error: '#ba1a1a',
  warning: '#e03f3e',
  success: '#4caf50',
  gray: '#757575',
  lightGray: '#f5f5f5',
  black: '#000000',
  white: '#ffffff',
};

export const colors = {
  primary: mainColors.primary,
  onPrimary: mainColors.white,
  primaryContainer: '#ffdad7',
  onPrimaryContainer: '#410006',
  secondary: mainColors.secondary,
  onSecondary: mainColors.white,
  secondaryContainer: '#ffdad7',
  onSecondaryContainer: '#2c1514',
  tertiary: mainColors.tertiary, // Warna tersier yang harmonis
  onTertiary: mainColors.white,
  tertiaryContainer: '#ffdeac',
  onTertiaryContainer: '#281800',

  error: mainColors.error,
  onError: mainColors.white,
  errorContainer: '#ffdad6',
  onErrorContainer: '#410002',

  background: '#fffbff',
  onBackground: '#201a1a',
  surface: '#fffbff',
  onSurface: '#201a1a',
  surfaceVariant: '#f5dddb',
  onSurfaceVariant: '#534342',
  outline: '#857371',
  outlineVariant: '#d8c2bf',

  shadow: '#000000',
  scrim: '#000000',
  inverseSurface: '#362f2e',
  inverseOnSurface: '#fbeeec',
  inversePrimary: '#ffb3af',
  surfaceDisabled: 'rgba(32,26,26,0.12)',
  onSurfaceDisabled: 'rgba(32,26,26,0.38)',
  backdrop: 'rgba(54,47,46,0.4)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(250, 242, 241)',
    level2: 'rgb(248, 238, 236)',
    level3: 'rgb(245, 233, 231)',
    level4: 'rgb(244, 232, 230)',
    level5: 'rgb(242, 229, 227)',
  },
};
