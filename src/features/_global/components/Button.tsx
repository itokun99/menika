import { fontFamilies, spacing } from '@core/styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonProps as BtnProps, Button as Btn } from 'react-native-paper';

export interface ButtonProps extends BtnProps {}

export const Button = React.memo(
  React.forwardRef<View, ButtonProps>((props, ref) => {
    return (
      <Btn
        ref={ref}
        {...props}
        style={[buttonStyle.wrapper, props.style]}
        labelStyle={[buttonStyle.labelStyle, props.labelStyle]}
      />
    );
  }),
);

const buttonStyle = StyleSheet.create({
  wrapper: {
    paddingVertical: spacing.xxs - 2,
    paddingHorizontal: spacing.xxs - 2,
    borderRadius: spacing.xs,
  },
  labelStyle: {
    fontFamily: fontFamilies.bold,
  },
});
