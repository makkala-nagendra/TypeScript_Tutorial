// A simple class with a constructor and methods.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Nani", 25);
p.greet();

// Avoid Global Interfaces
// export function test(){
//   // TODO 
// }