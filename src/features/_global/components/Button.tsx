import { spacing } from '@core/styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonProps as BtnProps, Button as Btn } from 'react-native-paper';

export interface ButtonProps extends BtnProps {}

export const Button = React.memo(
  React.forwardRef<View, ButtonProps>((props, ref) => {
    return (
      <Btn ref={ref} {...props} style={[buttonStyle.wrapper, props.style]} />
    );
  }),
);

const buttonStyle = StyleSheet.create({
  wrapper: {
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.xxs,
    borderRadius: 0,
  },
});
