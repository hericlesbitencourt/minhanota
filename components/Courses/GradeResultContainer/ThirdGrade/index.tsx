import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  averageGrades,
  averageText,
  calculateThirdGrade,
  gradeText,
} from '../../../../utils/calculateGrades';
import useTheme from '../../../../hooks/useTheme';
import { Grades } from '../../../../interfaces/Grade';

export default function ThirdGrade({grade1, grade2, grade4}: Grades) {
  const grades = {
    grade1,
    grade2,
    grade4,
  }
  const {colors} = useTheme();
  const color = colors.primary;
  const avg = averageGrades(grades)
  const thirdGrade = calculateThirdGrade({...grades, grade3: '10'});

  const resultText = () => {
    if (avg >= 7) {
      return 'Parabéns, você foi aprovado na disciplina!';
    } else if(avg < 7 && thirdGrade <= 10 ) {
      return `Você precisa de ${gradeText(thirdGrade)} na AV3`;
    } else if(avg < 7 && thirdGrade > 10 ) {
      return 'Mesmo que sua nota na AV3 seja 10, você pode estar na Avaliação Final ou Reprovado.';
    } else {
      return 'Infelizmente você já está reprovado na disciplina.';
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color}]}>
          {averageText(avg)}
        </Text>
        <Text style={[styles.text, {color}]}>
          {resultText()}
        </Text>
      </View>
      <LottieView
        style={[styles.lottieView]}
        source={
          thirdGrade > 10
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
