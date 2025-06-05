// Type Assertion
// Tell the compiler the type explicitly.
let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length;
