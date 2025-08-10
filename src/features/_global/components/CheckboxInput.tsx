import React from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { Checkbox, CheckboxProps, Text } from 'react-native-paper';

export interface CheckboxInputProps {
  text?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
  checkboxProps?: CheckboxProps;
  pressableProps?: PressableProps;
}

export const CheckboxInput = React.memo(
  ({ text, value, onChange, ...props }: CheckboxInputProps) => {
    const handlePress = () => {
      onChange?.(!value);
    };

    return (
      <Pressable
        onPress={handlePress}
        style={styles.wrapper}
        {...props.pressableProps}
      >
        <Checkbox
          {...props.checkboxProps}
          status={value ? 'checked' : 'unchecked'}
        />
        <View style={styles.labelWrapper}>
          {text && (
            <Text variant="bodySmall" style={styles.label}>
              {text}
            </Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  labelWrapper: {
    flexShrink: 1,
    overflow: 'hidden',
  },
  label: {},
});
