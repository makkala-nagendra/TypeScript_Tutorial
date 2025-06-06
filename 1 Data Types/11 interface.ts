// Defines the shape of an object.
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 24 };

// Another way to define object structures (more flexible than interface).
type Product = {
  id: number;
  title: string;
};

const item: Product = { id: 101, title: "Book" };
