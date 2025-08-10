import { fontSizes, spacing } from '@core/styles';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { ScrollView } from 'react-native-gesture-handler';

export interface AuthLayoutProps extends PropsWithChildren {
  title: string;
  description: string;
  footer?: React.ReactNode;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <KeyboardAwareScrollView ScrollViewComponent={ScrollView}>
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.headlineText}>
            {props.title}
          </Text>
          <Text variant="bodyMedium" style={styles.subheadlineText}>
            {props.description}
          </Text>
        </View>
        <View style={styles.body}>{props.children}</View>
        {props.footer && <View style={styles.footer}>{props.footer}</View>}
      </View>
    </KeyboardAwareScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  header: {
    marginTop: spacing.lg,
    paddingBottom: spacing.md,
    gap: spacing.sm,
  },
  headlineText: {},
  subheadlineText: {
    fontSize: fontSizes.sm,
  },
  body: {},
  footer: {},
});
