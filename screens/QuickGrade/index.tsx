import React from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import Heading from '../../components/UI/Heading';
import CourseForm from '../../components/Courses/CourseForm';

export default function QuickGrade() {

  return (
    <ScrollView style={styles.container}>
      <Heading title="Cálculo Rápido" />
      <CourseForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
