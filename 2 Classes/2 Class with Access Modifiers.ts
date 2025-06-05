// Access modifiers define the visibility of class members.
// public – accessible from anywhere (default)
// private – accessible only within the class
// protected – accessible within the class and subclasses

class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getSalary(): number {
    return this.salary;
  }
}
