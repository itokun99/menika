import { Platform } from 'react-native';

/**
 * @fileoverview
 * Defines the typography system for the application, including font families,
 * sizes, and weights.
 */

// Definisikan nama font Anda. Ini membantu jika Anda perlu mengganti font di masa depan.
export const fonts = {
  primary: Platform.select({
    ios: 'Helvetica',
    android: 'Roboto',
    default: 'system',
  }),
  // Anda bisa menambahkan font lain, misal: 'primaryBold', 'secondary', dll.
};

// Skala ukuran font
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16, // Ukuran dasar untuk body text
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Ketebalan font
export const fontWeights = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  bold: '700' as const,
};
