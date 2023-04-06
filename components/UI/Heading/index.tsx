import {StyleSheet, View} from 'react-native';
import Title from '../Title';

interface Props {
  title: string;
}

export default function Heading({title}: Props) {

  return (
    <View style={[styles.heading]}>
      <Title>{title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
  },
});
