import { appTheme, nativeSplashScreen } from '@core/libs';
import { RouteNames } from '@core/models';
import { BottomTabBar } from '@features/_global';
import { LoginScreen, RegisterScreen } from '@features/auth';
import { HomeScreen } from '@features/home';
import { LandingScreen, OnboardingScreen } from '@features/onboarding';
import { ProfileScreen } from '@features/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeTabs = createBottomTabNavigator({
  initialRouteName: RouteNames.homeLanding,
  tabBar: prop => <BottomTabBar {...prop} />,
  screenOptions: {
    headerShown: false,
    animation: 'shift',
  },
  screens: {
    [RouteNames.homeLanding]: HomeScreen,
    [RouteNames.inspiration]: ProfileScreen,
    [RouteNames.vendor]: ProfileScreen,
    [RouteNames.profile]: ProfileScreen,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: RouteNames.onboarding,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [RouteNames.landing]: LandingScreen,
    [RouteNames.login]: LoginScreen,
    [RouteNames.register]: RegisterScreen,
    [RouteNames.home]: HomeTabs,
    [RouteNames.onboarding]: OnboardingScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export const AppNavigation = () => {
  return (
    <Navigation
      theme={appTheme}
      onReady={() => {
        nativeSplashScreen.hide();
      }}
    />
  );
};
