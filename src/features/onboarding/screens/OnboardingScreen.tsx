import { imageList } from '@core/assets';
import { appStorageAction } from '@core/libs/storage';
import { RouteNames } from '@core/models';
import { appStyles, colors, spacing } from '@core/styles';
import { Button } from '@features/_global';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handlePressSignIn = () => {
    navigation.navigate(RouteNames.login as never);
  };

  const handlePressGuest = () => {
    navigation.navigate(RouteNames.home as never);
    appStorageAction.setShowOnboarding(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[appStyles.flexFill, appStyles.flexCenter]}>
        <View style={[appStyles.flexCenter]}>
          <Image source={imageList.imgOnboard} style={styles.img} />
          <Text variant="titleLarge" style={styles.textContent}>
            {'Wujudkan pernikahannya sesuai mimpimu bersama pasangan'}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button mode="contained" onPress={handlePressSignIn}>
          {'Masuk / Daftar'}
        </Button>
        <Button mode="text" onPress={handlePressGuest}>
          {'Masuk sebagai tamu'}
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
  textContent: {
    textAlign: 'center',
  },
  footer: {
    marginBottom: spacing.lg,
    gap: spacing.xs,
  },
  img: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
});
