import { imageList } from '@core/assets';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const OnboardingScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={imageList.imgOnboard} />
      </View>
    </SafeAreaView>
  );
};
