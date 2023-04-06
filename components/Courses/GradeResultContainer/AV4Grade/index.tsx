import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {calculateAV4Grade} from '../../../../utils/calculateGrades';
import {Course} from '../../../../models/course';
import useTheme from '../../../../hooks/useTheme';

export default function AV4Grade({grade1, grade2, grade3}: Course) {
  const {colors} = useTheme();
  const color = colors.primary;
  const AV4Grade = calculateAV4Grade(grade1, grade2, grade3);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color}]}>
          {AV4Grade > 10
            ? 'Mesmo que sua nota no AV4 seja 10, você já está na Avaliação Final'
            : `Você precisa de ${String(AV4Grade).replace('.', ',')} ponto${
                AV4Grade > 1 && 's'
              } no AV4`}
        </Text>
      </View>
      <LottieView
        style={[styles.lottieView]}
        source={
          AV4Grade > 10
            ? require('../../../../assets/lottie/online-study.json')
            : require('../../../../assets/lottie/third-grade.json')
        }
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
  lottieView: {
    width: 250,
  },
});
