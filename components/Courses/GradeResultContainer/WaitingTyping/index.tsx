import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import useTheme from '../../../../hooks/useTheme';

export default function WaitingTyping() {
  const {colors} = useTheme();
  const color = colors.primary;
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color}]}>
          Digite ao menos a AV1, AV2 e AV3 ou AV4
        </Text>
      </View>
      <LottieView
        style={styles.lottie}
        source={require('../../../../assets/lottie/carbon-calculator.json')}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lottie: {
    width: 250,
  },
});
