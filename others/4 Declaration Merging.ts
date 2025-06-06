// Interfaces with the same name get merged.
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user: Person = {
  name: "Raj",
  age: 30
};

console.log(user)