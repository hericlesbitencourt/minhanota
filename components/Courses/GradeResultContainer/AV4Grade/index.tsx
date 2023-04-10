import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import {
  averageGrades,
  averageText,
  calculateAV4Grade,
  gradeText,
} from "../../../../utils/calculateGrades";
import useTheme from "../../../../hooks/useTheme";
import { Grades } from "../../../../interfaces/Grade";

export default function AV4Grade({ grade1, grade2, grade3 }: Grades) {
  const grades = {
    grade1,
    grade2,
    grade3,
  };
  const { colors } = useTheme();
  const color = colors.primary;
  const avg = averageGrades(grades)
  const av4Grade = calculateAV4Grade({...grades, grade4: '10'});


  const resultText = () => {
    if (avg >= 7) {
      return 'Parabéns, você foi aprovado na disciplina!';
    } else if(avg < 7 && av4Grade <= 10 ) {
      return `Você precisa de ${gradeText(av4Grade)} na AV4`;
    } else if(avg < 7 && av4Grade > 10 ) {
      return 'Mesmo que sua nota na AV4 seja 10, você pode estar na Avaliação Final ou Reprovado.';
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
        <Text style={[styles.text, { color }]}>
          {resultText()}
        </Text>
      </View>
      <LottieView
        style={[styles.lottieView]}
        source={
          av4Grade > 10
            ? require("../../../../assets/lottie/online-study.json")
            : require("../../../../assets/lottie/third-grade.json")
        }
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  lottieView: {
    width: 250,
  },
});
