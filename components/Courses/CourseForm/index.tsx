import { StyleSheet, TextInput, View } from "react-native";
import React, { createRef, useState } from "react";
import NumberInput from "../../UI/NumberInput";
import GradeResultContainer from "../GradeResultContainer";

export default function CourseForm() {
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");
  const [grade3, setGrade3] = useState("");
  const [grade4, setGrade4] = useState("");

  const gradeInput1Ref = createRef<TextInput>();
  const gradeInput2Ref = createRef<TextInput>();
  const gradeInput3Ref = createRef<TextInput>();
  const gradeInput4Ref = createRef<TextInput>();
  
  return (
    <View style={styles.container}>
      <View style={styles.gradeInputContainer}>
        <NumberInput
          placeholder="AV1"
          value={grade1}
          onChangeText={setGrade1}
          ref={gradeInput1Ref}
          onSubmitEditing={() => gradeInput2Ref.current?.focus()}
          returnKeyType="next"
          containerStyle={[styles.viewWidth23]}
        />
        <NumberInput
          placeholder="AV2"
          value={grade2}
          onChangeText={setGrade2}
          ref={gradeInput2Ref}
          onSubmitEditing={() => gradeInput3Ref.current?.focus()}
          returnKeyType="next"
          containerStyle={[styles.viewWidth23]}
        />
        <NumberInput
          placeholder="AV3"
          value={grade3}
          onChangeText={setGrade3}
          ref={gradeInput3Ref}
          onSubmitEditing={() => gradeInput4Ref.current?.focus()}
          returnKeyType="next"
          containerStyle={[styles.viewWidth23]}
        />
        <NumberInput
          placeholder="AV4"
          value={grade4}
          onChangeText={setGrade4}
          ref={gradeInput4Ref}
          containerStyle={[styles.viewWidth23]}
        />
      </View>
      <GradeResultContainer grade1={grade1} grade2={grade2} grade3={grade3} grade4={grade4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  gradeInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 7,
  },
  viewWidth23: {
    width: "23%",
  },
});
