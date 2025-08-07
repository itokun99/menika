import { LoginScreen, RegisterScreen } from '@features/auth';
import { HomeScreen } from '@features/home';
import { LandingScreen } from '@features/onboarding';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'landing',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    landing: LandingScreen,
    login: LoginScreen,
    register: RegisterScreen,
    home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export const AppNavigation = () => {
  return <Navigation />;
};
