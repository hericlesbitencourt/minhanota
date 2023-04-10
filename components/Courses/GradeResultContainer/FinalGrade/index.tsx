import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  averageGrades, averageText, calculateFinalGrade, gradeText,
} from '../../../../utils/calculateGrades';
import useTheme from '../../../../hooks/useTheme';
import { Grades } from '../../../../interfaces/Grade';

export default function FinalGrade({
  grade1,
  grade2,
  grade3,
  grade4,
}: Grades) {
  const grades = {
    grade1,
    grade2,
    grade3,
    grade4,
  };
  const {colors} = useTheme();
  const color = colors.primary;

  const avg = averageGrades(grades)
  const finalGrade = calculateFinalGrade(avg);

  const resultText = () => {
    if (avg >= 7) {
      return 'Parabéns, você foi aprovado na disciplina!';
    } else if(avg < 7 && finalGrade <= 10 ) {
      return `Você precisa de ${gradeText(finalGrade)} na Avaliação Final`;
    } else {
      return 'Infelizmente você já está reprovado na disciplina.';
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color}]}>
        {averageText(avg)}
      </Text>
      <View>
        <Text style={[styles.text, {color}]}>
          {resultText()}
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
