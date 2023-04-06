import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  arithmeticAverage,
  calculateFinalGrade,
} from '../../../../utils/calculateGrades';
import {Course} from '../../../../models/course';
import useTheme from '../../../../hooks/useTheme';

export default function FinalGrade({
  grade1,
  grade2,
  grade3,
  grade4,
}: Course) {
  const {colors} = useTheme();
  const color = colors.primary;
  const average = arithmeticAverage(grade1, grade2, grade3!, grade4!);
  const finalGrade = calculateFinalGrade(average);
  console.log('average', average);
  console.log('finalGrade', (5 - average * 0.6) / 0.4);
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color}]}>
          {`Sua MÉDIA foi de ${String(average).replace('.', ',')} ponto${
            average && average > 1 && 's'
          }`}
        </Text>
        <Text style={[styles.text, {color}]}>
          {average >= 7
            ? 'Parabéns você foi aprovado!'
            : average < 7 && average >= 1.7
            ? `Você precisa de ${String(finalGrade).replace('.', ',')} ponto${
                finalGrade && finalGrade > 1 ? 's' : ''
              } na Avaliação Final`
            : 'Você foi reprovado'}
        </Text>
      </View>
      <LottieView
        style={[styles.lottieView]}
        source={
          finalGrade && finalGrade > 10
            ? require('../../../../assets/lottie/failure-feedback-rejected.json')
            : finalGrade <= 0
            ? require('../../../../assets/lottie/success-sign.json')
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
