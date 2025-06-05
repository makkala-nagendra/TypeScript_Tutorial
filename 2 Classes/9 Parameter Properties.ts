// Shorthand for declaring and initializing members from constructor.
class Student {
  constructor(public name: string, private grade: number) {}

  getGrade(): number {
    return this.grade;
  }
}

const s = new Student("Alice", 90);
console.log(s.getGrade());
