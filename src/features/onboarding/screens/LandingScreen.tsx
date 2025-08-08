import { imageList } from '@core/assets';
import { appStyles, spacing } from '@core/styles';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={imageList.imgSplash} style={styles.img} />
        <View style={styles.content}>
          <ActivityIndicator />
          <Text>Please Wait...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    ...appStyles.flexRow,
    gap: spacing.xs,
    justifyContent: 'center',
  },
  img: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
  },
});
