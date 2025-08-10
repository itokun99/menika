import { imageList } from '@core/assets';
import { appStorageAction } from '@core/libs/storage';
import { RouteNames } from '@core/models';
import { appStyles, colors, spacing } from '@core/styles';
import { Button, LangSwitcher } from '@features/_global';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const OnboardingScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handlePressSignIn = () => {
    navigation.navigate(RouteNames.register as never);
  };

  const handlePressGuest = () => {
    navigation.navigate(RouteNames.home as never);
    appStorageAction.setShowOnboarding(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lang}>
        <LangSwitcher />
      </View>
      <View style={[appStyles.flexFill, appStyles.flexCenter]}>
        <View style={styles.content}>
          <Image source={imageList.imgOnboard} style={styles.img} />
          <Text variant="headlineSmall" style={styles.headline}>
            {t('onboarding.title')}
          </Text>
          <Text variant="bodyMedium" style={styles.textContent}>
            {t('onboarding.description')}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button mode="contained" onPress={handlePressSignIn}>
          {t('onboarding.cta.startPlanning')}
        </Button>
        <Button mode="text" onPress={handlePressGuest}>
          {t('onboarding.cta.continueAsGuest')}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...appStyles.container,
    backgroundColor: colors.white,
  },
  headline: {
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  description: {
    textAlign: 'center',
  },
  textContent: {
    textAlign: 'center',
  },
  footer: {
    gap: spacing.xs,
  },
  img: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
  content: {
    ...appStyles.flexCenter,
  },
  lang: {
    ...appStyles.flexRow,
    justifyContent: 'flex-end',
  },
});
