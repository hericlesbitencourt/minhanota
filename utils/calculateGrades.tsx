// There's a lot of problems when dealing with round involving floating point numbers in JavaScript
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
// https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript

import { Grades } from "../interfaces/Grade";

export const weightGrade1 = 0.25;
export const weightGrade2 = 0.25;
export const weightGrade3 = 0.3;
export const weightGrade4 = 0.2;

function formattedNumber(number: number, decimalCases: number) {
  // So, we multiply the number by 10 to the power of the number of decimal cases
  // and then we round it, and then we divide it by the same factor,
  // the we get the number with the desired number of decimal cases.
  // Ex: 1.2345 with 2 decimal cases
  const factor = Math.pow(10, decimalCases);
  const aproxNum = number * factor;
  const roundedNum = Math.round(aproxNum);
  const result = roundedNum / factor;

  return result;
}

export const parseDecimal = (value: string) => {
  return Number(value.replace(",", "."));
};

export const formatGrade = (value: string) => {
  if (value.length >= 3) {
    value = value.replace(/\D/g, "").replace(/(\d{2})(\d{1}).*/, "$1,$2");
    if (Number(value.toString().replace(",", ".")) > 10) {
      value = value.slice(0, -2);
      value = value.replace(/\D/g, "").replace(/(\d{1})(\d{1,2}).*/, "$1,$2");
    }
  } else {
    value = value.replace(/\D/g, "").replace(/(\d{1})(\d{1,2}).*/, "$1,$2");
  }

  return value;
};

export const averageGrades = (grades: Grades): number => {
  let sumGrades =
    parseDecimal(grades.grade1) * weightGrade1 +
    parseDecimal(grades.grade2) * weightGrade2;
  if (grades.grade3) {
    sumGrades += parseDecimal(grades.grade3) * weightGrade3;
  }
  if (grades.grade4) {
    sumGrades += parseDecimal(grades.grade4) * weightGrade4;
  }

  return formattedNumber(sumGrades, 1);
};

export const calculateFinalGrade = (average: number) => {
  return formattedNumber((5 - average * 0.6) / 0.4, 1);
};

export const calculateThirdGrade = ({ grade1, grade2, grade4 }: Grades) => {
  const avg = averageGrades({ grade1, grade2, grade4 });
  return formattedNumber((7 - avg) / 0.3, 1);
};

export const calculateAV4Grade = ({ grade1, grade2, grade3 }: Grades) => {
  const avg = averageGrades({ grade1, grade2, grade3 });
  return formattedNumber((7 - avg) / 0.2, 1);
};

export const gradeText = (grade: number) => {
  const gradeString = String(grade).replace(".", ",");
  if (grade === 0.1) {
    return `${gradeString} décimo`;
  } else if (grade < 1) {
    return `${gradeString} décimos`;
  } else if (grade === 1) {
    return "1 ponto";
  } else if (grade > 1) {
    return `${gradeString} pontos`;
  } else return "";
};

export const averageText = (average: number) => {
  const initText = "Sua média foi de ";
  const averageString = String(average).replace(".", ",");
  if (average === 0.1) {
    return `${initText + averageString} décimo`;
  } else if (average < 1) {
    return `${initText + averageString} décimos`;
  } else if (average === 1) {
    return initText + "1 ponto";
  } else if (average > 1) {
    return `${initText + averageString} pontos`;
  } else return "";
};
