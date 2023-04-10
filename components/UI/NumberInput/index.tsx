import React, {LegacyRef, forwardRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {formatGrade} from '../../../utils/calculateGrades';
import useTheme from '../../../hooks/useTheme';

interface CustomTextInputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  containerStyle?: StyleProp<TextStyle> | undefined;
}

function Input(
  {
    placeholder,
    value,
    onChangeText,
    onSubmitEditing,
    returnKeyType,
    style,
    containerStyle,
  }: CustomTextInputProps,
  ref?: LegacyRef<TextInput> | undefined,
) {
  const {colors} = useTheme();

  function handleOnChangeText(text: string) {
    let formattedValue = formatGrade(text);
    let floatValue = parseFloat(formattedValue.replace(',', '.'));
    if (floatValue === 10) {
      return onChangeText('10');
    }
    if (floatValue > 10) {
      return onChangeText('10');
    } else {
      return onChangeText(formattedValue);
    }
  }

  return (
    <View style={[containerStyle]}>
      <TextInput
          keyboardType="numeric"
        style={[
          styles.input,
          {
            shadowColor: colors.primary,
            color: colors.primary,
            backgroundColor: colors.card,
          },
          style,
        ]}
        maxLength={value === '10' ? 2 : value === '1,0' ? 4 : 3}
        onChangeText={handleOnChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.tertiary}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        ref={ref}
        textAlign="center"
      />
    </View>
  );
}

export default forwardRef(Input);

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    fontSize: 17,
    borderRadius: 20,
    padding: 20,
  },
});
