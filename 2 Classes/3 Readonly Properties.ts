// Values that can only be assigned once.
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
  }
}
