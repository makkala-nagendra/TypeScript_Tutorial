// A class can implement one or more interfaces.
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  print(): void {
    console.log("Printing invoice...");
  }
}
