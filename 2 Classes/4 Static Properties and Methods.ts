// Belong to the class itself, not instances.
class MathHelper {
  static PI: number = 3.14;

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(5)); // 25
