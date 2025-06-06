// Generic function
function identity<T>(value: T): T {
  return value;
}

let output = identity<number>(42);
let textOutput = identity<string>("Hello");
