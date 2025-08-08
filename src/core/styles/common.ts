/**
 * @fileoverview
 * Exports all core styling modules and provides a centralized `appStyles` object
 * for common, reusable style definitions.
 */

import { colors } from './colors';
import { spacing } from './spacing';
import { fonts, fontSizes, fontWeights } from './typography';
import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  // --- Layout ---
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  flexFill: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // --- Typography ---
  textH1: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  textH2: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  textH3: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    color: colors.black,
  },
  textBody: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    color: colors.grayDark,
    lineHeight: 24,
  },
  textCaption: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    color: colors.gray,
  },
  textError: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    color: colors.error,
    marginTop: spacing.xs,
  },
  textLink: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    color: colors.primary,
    textDecorationLine: 'underline',
  },

  // --- UI Elements ---
  card: {
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    padding: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.grayLighter,
    marginVertical: spacing.md,
  },
});
