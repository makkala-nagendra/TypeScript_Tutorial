// Define the types
interface Address {
  street: string;
  city: string;
}

interface User {
  name: string;
  age?: number;
  address?: Address | null;
}

// Sample data
const user1: User = {
  name: "Nani",
  age: 25,
  address: {
    street: "Main Road",
    city: "Hyderabad"
  }
};

const user2: User = {
  name: "Guest"
};

// -------------------------------
// ✅ Optional Chaining (?.)
// -------------------------------
function getCity(user: User): string | undefined {
  return user.address?.city;
}

console.log(getCity(user1)); // Hyderabad
console.log(getCity(user2)); // undefined

// -------------------------------
// ✅ Nullish Coalescing (??)
// -------------------------------
function getUserAge(user: User): number {
  return user.age ?? 0; // if age is null or undefined, default to 0
}

console.log(getUserAge(user1)); // 25
console.log(getUserAge(user2)); // 0

// -------------------------------
// ✅ Manual Null Check
// -------------------------------
function printStreet(user: User): void {
  if (user.address && user.address.street) {
    console.log(`Street: ${user.address.street}`);
  } else {
    console.log("Street information not available.");
  }
}

printStreet(user1); // Street: Main Road
printStreet(user2); // Street information not available.

// -------------------------------
// ✅ Combine Optional Chaining + Nullish Coalescing
// -------------------------------
function getFullAddress(user: User): string {
  const street = user.address?.street ?? "Unknown Street";
  const city = user.address?.city ?? "Unknown City";
  return `${street}, ${city}`;
}

console.log(getFullAddress(user1)); // Main Road, Hyderabad
console.log(getFullAddress(user2)); // Unknown Street, Unknown City
