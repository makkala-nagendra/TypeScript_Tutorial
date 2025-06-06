// any - disable type checking (use with caution)
let randomValue: any = "Could be anything";
randomValue = 10; console.log(randomValue);
randomValue = true;
console.log(randomValue);

// unknown - safer alternative to 'any'; must type-check before use
let unknownValue: unknown = "Test";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// void - typically used for functions that return nothing
function logMessage(): void {
  console.log("Hello, world");
}

// never - for functions that never return (e.g., throw or infinite loop)
function throwError(): never {
  throw new Error("Something went wrong!");
}
