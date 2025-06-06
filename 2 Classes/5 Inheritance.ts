// One class inherits properties and methods from another.
class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  // makeSound(): void {
  //   console.log("Woof!");
  // }
}

const d = new Dog();
d.makeSound(); // Woof!
