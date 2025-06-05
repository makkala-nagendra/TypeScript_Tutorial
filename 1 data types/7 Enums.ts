// Numeric enum
enum Status {
  Pending, // 0
  Approved, // 1
  Rejected // 2
}

let currentStatus: Status = Status.Approved;

// String enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Left;
