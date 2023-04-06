import {Course} from '../../../models/course';
import AV4Grade from './AV4Grade';
import FinalGrade from './FinalGrade';
import ThirdGrade from './ThirdGrade';
import WaitingTyping from './WaitingTyping';

export default function GradeResultContainer({
  grade1,
  grade2,
  grade3,
  grade4,
}: Course) {
  return (
    <>
      {/* Esperando digitar as notas  */}
      {(!grade1 && !grade2 && !grade3) ||
      (grade1 && grade2 && !grade3 && !grade4) ||
      !grade1 ||
      !grade2 ? (
        <WaitingTyping />
      ) : null}

      {/* Cálculo da 3ª nota */}
      {grade1 && grade2 && grade4 && !grade3 ? (
        <ThirdGrade grade1={grade1} grade2={grade2} grade4={grade4} />
      ) : null}

      {/* Cálculo do AV4 */}
      {grade1 && grade2 && grade3 && !grade4 ? (
        <AV4Grade grade1={grade1} grade2={grade2} grade3={grade3} />
      ) : null}

      {/* Cálculo da avaliação final */}
      {grade1 && grade2 && grade3 && grade4 ? (
        <FinalGrade
          grade1={grade1}
          grade2={grade2}
          grade3={grade3}
          grade4={grade4}
        />
      ) : null}
    </>
  );
}
