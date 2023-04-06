// There's a lot of problems when dealing with round involving floating point numbers in JavaScript
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
// https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
// So, we decide to use the Intl.NumberFormat to format the numbers
function formatNumber(number: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
}

const weightAv1 = 0.25;
const weightAv2 = 0.25;
const weightAv3 = 0.3;
const weightAv4 = 0.2;

export const formatGrade = (value: string) => {
  if (value.length >= 3) {
    value = value.replace(/\D/g, '').replace(/(\d{2})(\d{1}).*/, '$1,$2');
    if (Number(value.toString().replace(',', '.')) > 10) {
      value = value.slice(0, -2);
      value = value.replace(/\D/g, '').replace(/(\d{1})(\d{1,2}).*/, '$1,$2');
    }
  } else {
    value = value.replace(/\D/g, '').replace(/(\d{1})(\d{1,2}).*/, '$1,$2');
  }

  return value;
};

export const calculateFinalGrade = (average: number) => {
  return round((5 - average * 0.6) / 0.4, 1);
};

export const calculateThirdGrade = (
  grade1: string,
  grade2: string,
  grade4: string | undefined,
) => {
  return (
    Math.floor(
      ((7 -
        (Number(grade1.replace(',', '.')) * weightAv1 +
          Number(grade2.replace(',', '.')) * weightAv2+
          Number(grade4 ? grade4.replace(',', '.') : 0.0) * weightAv4)) /
        0.3) *
        10,
    ) / 10
  );
};

export const calculateAV4Grade = (
  grade1: string,
  grade2: string,
  grade3: string | undefined,
) => {
  return round(
    (7 -
      (Number(grade1.replace(',', '.')) * weightAv1 +
        Number(grade2.replace(',', '.')) * weightAv2 +
        Number(grade3 ? grade3.replace(',', '.') : 0.0) * weightAv3)) /
      0.2,
    1,
  );
};

export const gradeText = (grade: number) => {
  return `${
    grade < 1
      ? `${grade} décimos `
      : grade === 1
      ? '1 ponto '
      : `${grade} pontos `
  }`;
};

export const thirdGradeText = (thirdGrade: number) => {
  return thirdGrade > 10
    ? 'Mesmo que sua nota na AV3 seja 10, você já está na Avaliação Final'
    : `Você precisa de ${thirdGrade} ponto${thirdGrade > 1 && 's'} na AV3`;
};

export const finalGradeText = (finalGrade?: number) => {
  if (finalGrade) {
    return finalGrade > 10
      ? 'Você foi reprovado'
      : `Você precisa de ${String(finalGrade).replace('.', ',')} ponto${
          finalGrade > 1 && 's'
        } na Avaliação Final`;
  }
};

export const arithmeticAverage = (
  grade1: string,
  grade2: string,
  grade3: string | undefined,
  grade4: string | undefined,
) => {
  return round(
    Number(grade1.replace(',', '.')) * 0.25 +
      Number(grade2.replace(',', '.')) * 0.25 +
      Number(grade3 ? grade3.replace(',', '.') : 0) * 0.3 +
      Number(grade4 ? grade4.replace(',', '.') : 0) * 0.2,
    1,
  );
};
