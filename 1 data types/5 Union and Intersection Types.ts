// Union - variable can be multiple types
let value: string | number = "hello";
console.log(value)
value = 42;
console.log(value)

// Intersection - combines multiple types
type Admin = { role: string };
type Employee = { name: string };
type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  role: "Devloper",
  name: "Nagendra"
};

console.log(admin)