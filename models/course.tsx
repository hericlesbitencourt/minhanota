export class Course {
  name?: string;
  grade1: string;
  grade2: string;
  grade3?: string;
  grade4?: string;
  id?: number;

  constructor(
    name: string,
    grade1: string,
    grade2: string,
    grade3: string,
    grade4: string,
    id: number,
  ) {
    this.name = name;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.grade4 = grade4;
    this.id = id;
  }
}
