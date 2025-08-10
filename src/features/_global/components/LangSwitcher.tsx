import { colors, fontFamilies, spacing } from '@core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const items = [
  {
    label: 'EN',
    value: 'en',
  },
  {
    label: 'ID',
    value: 'id',
  },
];

/**
 * A Component to switch between languages.
 */
export const LangSwitcher = React.memo(() => {
  const { i18n } = useTranslation();
  const selectedLang = i18n.language;

  return (
    <View style={styles.wrapper}>
      {items.map(d => {
        const isActive = d.value === selectedLang;
        return (
          <Pressable
            style={[styles.btn, isActive && styles.btnActive]}
            key={d.value}
            onPress={() => i18n.changeLanguage(d.value)}
          >
            <Text style={[styles.btnText, isActive && styles.btnTextActive]}>
              {d.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: spacing.xs,
    backgroundColor: colors.grayLight,
    flexDirection: 'row',
  },
  btn: {
    padding: spacing.xs,
  },
  btnActive: {
    backgroundColor: colors.primary,
  },
  btnText: {
    color: colors.gray,
    fontFamily: fontFamilies.bold,
  },
  btnTextActive: {
    color: colors.white,
  },
});
