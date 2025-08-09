import { appTheme, nativeSplashScreen } from '@core/libs';
import { RouteNames } from '@core/models';
import { LoginScreen, RegisterScreen } from '@features/auth';
import { HomeScreen } from '@features/home';
import { LandingScreen, OnboardingScreen } from '@features/onboarding';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: RouteNames.onboarding,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [RouteNames.landing]: LandingScreen,
    [RouteNames.login]: LoginScreen,
    [RouteNames.register]: RegisterScreen,
    [RouteNames.home]: HomeScreen,
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
