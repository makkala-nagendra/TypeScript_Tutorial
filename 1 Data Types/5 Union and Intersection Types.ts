// Union - variable can be multiple types
let value: string | number = "hello";
value = 42;

// Intersection - combines multiple types
type Admin = { role: string };
type Employee = { name: string };
type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  role: "Manager",
  name: "Nagendra"
};
