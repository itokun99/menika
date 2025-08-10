import { colors, spacing } from '@core/styles';
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import {
  TextInput as RNPTextInput,
  TextInputProps as RNPTextInputProps,
  Text,
} from 'react-native-paper';

export interface TextInputProps extends RNPTextInputProps {
  errorText?: string;
  infoText?: string;
}

export const TextInput = React.memo(
  React.forwardRef<NativeTextInput, TextInputProps>(
    ({ errorText, infoText, ...props }, ref) => {
      const [secure, setSecure] = React.useState(true);

      const handleToggleSecureInput = () => setSecure(!secure);

      return (
        <>
          <RNPTextInput
            ref={ref}
            error={Boolean(errorText)}
            right={
              props.secureTextEntry && (
                <RNPTextInput.Icon
                  onPress={handleToggleSecureInput}
                  icon={secure ? 'eye-off' : 'eye'}
                />
              )
            }
            {...props}
            secureTextEntry={props.secureTextEntry ? secure : false}
          />
          <View style={styles.bottom}>
            {errorText ? (
              <Text
                variant="bodySmall"
                style={[styles.bottomText, styles.bottomTextError]}
              >
                {errorText}
              </Text>
            ) : (
              infoText && (
                <Text variant="bodySmall" style={styles.bottomText}>
                  {infoText}
                </Text>
              )
            )}
          </View>
        </>
      );
    },
  ),
);

export const styles = StyleSheet.create({
  bottom: {
    paddingBottom: spacing.xxs,
  },
  bottomText: {},
  bottomTextError: {
    color: colors.error,
  },
});
