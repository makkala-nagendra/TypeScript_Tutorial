interface Car {
  readonly brand: string;
}

const car: Car = { brand: "Toyota" };
// car.brand = "Honda"; ❌ Error
