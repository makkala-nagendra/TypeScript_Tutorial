// Cannot be instantiated directly. Must be extended.
abstract class Shape {
  abstract getArea(): number;

  describe(): void {
    console.log("This is a shape");
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(10);
console.log(c.getArea());
