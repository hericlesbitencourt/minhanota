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
    keyboardType,
    onChangeText,
    onSubmitEditing,
    textAlign,
    returnKeyType,
    style,
    containerStyle,
  }: CustomTextInputProps,
  ref?: LegacyRef<TextInput> | undefined,
) {
  const {colors} = useTheme();

  function handleOnChangeText(text: string) {
    if (keyboardType === 'numeric') {
      let formattedValue = formatGrade(text);
      let floatValue = Number(formattedValue.replace(',', '.'));
      if (floatValue === 10) {
        return onChangeText('10');
      }
      if (floatValue > 10) {
        return;
      } else {
        return onChangeText(formattedValue);
      }
    } else {
      return onChangeText(text);
    }
  }

  return (
    <View style={[containerStyle]}>
      <TextInput
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            shadowColor: colors.primary,
            color: colors.primary,
            backgroundColor: colors.card,
          },
          style,
        ]}
        onChangeText={handleOnChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.tertiary}
        maxLength={20}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        ref={ref}
        textAlign={textAlign}
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
