import {StyleSheet, Text} from 'react-native';
import useTheme from '../../../hooks/useTheme';

export default function Title({children}: {children: any}) {
  const {colors} = useTheme();
  console.log('colors', colors.primary)
  return (
    <Text style={[styles.title, {color: colors.primary}]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Inter_900Black',
  },
});
