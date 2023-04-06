import {
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native';
import {formatGrade} from '../../../utils/calculateGrades';
import {LegacyRef} from 'react';
import useTheme from '../../../hooks/useTheme';

interface Props {
  placeholder: string;
  grade: string;
  setGrade: (grade: string) => void;
  onSubmitEditing?: () => void | undefined;
  ref?: LegacyRef<TextInput> | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  style?: StyleProp<TextStyle> | undefined;
}

export default function GradeInput({
  placeholder,
  grade,
  setGrade,
  onSubmitEditing,
  ref,
  returnKeyType,
  style,
}: Props) {
  const {colors} = useTheme();

  return (
    <TextInput
      keyboardType="numeric"
      placeholder={placeholder}
      placeholderTextColor={colors.tertiary}
      style={[
        styles.input,
        {shadowColor: colors.primary, color: colors.primary},
        style,
      ]}
      onChangeText={value => {
        let formattedValue = formatGrade(value);
        let floatValue = Number(formattedValue.replace(',', '.'));
        if (floatValue === 10) {
          return setGrade('10');
        }
        if (floatValue > 10) {
          return;
        } else {
          return setGrade(formattedValue);
        }
      }}
      maxLength={
        grade.replace(',', '.') === '1' || grade.replace(',', '.') === '1.0'
          ? 4
          : Number(grade.replace(',', '.')) < 10
          ? 3
          : 2
      }
      textAlign="center"
      value={grade}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      ref={ref}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    fontSize: 17,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
  },
});
