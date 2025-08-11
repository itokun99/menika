import { RouteNames } from '@core/models';
import { mainColors } from '@core/styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Icon } from 'react-native-paper';

const TAB_ICONS = {
  [RouteNames.homeLanding]: 'home-outline',
  [RouteNames.profile]: 'account-outline',
  [RouteNames.inspiration]: 'head-lightbulb-outline',
  [RouteNames.vendor]: 'storefront-outline',
};

export const BottomTabBar = React.memo(
  ({ navigation, state, descriptors, insets }: BottomTabBarProps) => {
    const { t } = useTranslation();

    return (
      <BottomNavigation.Bar
        navigationState={state}
        safeAreaInsets={insets}
        style={styles.wrapper}
        onTabPress={({ route, preventDefault }) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
            return;
          }
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }}
        getLabelText={({ route }) => {
          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : typeof options.title === 'string'
              ? options.title
              : t(`routes.${route.name}`);

          return label;
        }}
        renderIcon={({ route, color }) => {
          const iconSource: any =
            TAB_ICONS[route.name as keyof typeof TAB_ICONS] || 'circle';
          return <Icon source={iconSource} size={24} color={color} />;
        }}
      />
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: mainColors.white,
  },
});
