import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  calculateThirdGrade,
  gradeText,
} from '../../../../utils/calculateGrades';
import {Course} from '../../../../models/course';
import useTheme from '../../../../hooks/useTheme';

export default function ThirdGrade({grade1, grade2, grade4}: Course) {
  const {colors} = useTheme();
  const color = colors.primary;
  const thirdGrade = calculateThirdGrade(grade1, grade2, grade4!);
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color}]}>
          {thirdGrade > 10
            ? 'Mesmo que sua nota na AV3 seja 10, você já está na Avaliação Final'
            : `Você precisa de ${String(thirdGrade).replace(
                '.',
                ',',
              )} ${gradeText(thirdGrade)} na AV3`}
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
