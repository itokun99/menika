const FONT_FAMILY_REGULAR = 'Geist-Regular';
const FONT_FAMILY_MEDIUM = 'Geist-Medium';
const FONT_FAMILY_BOLD = 'Geist-Bold';
const FONT_FAMILY_BLACK = 'Geist-ExtraBold';
const FONT_FAMILY_LIGHT = 'Geist-Light';

export const fontFamilies = {
  regular: FONT_FAMILY_REGULAR,
  medium: FONT_FAMILY_MEDIUM,
  bold: FONT_FAMILY_BOLD,
  black: FONT_FAMILY_BLACK,
  light: FONT_FAMILY_LIGHT,
};

export const fonts = {
  primary: 'Geist',
};

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
