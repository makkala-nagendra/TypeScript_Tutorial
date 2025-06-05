// Encapsulate access to properties with control logic.
class User {
  private _password: string = "";

  get password(): string {
    return this._password;
  }

  set password(newPassword: string) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    } else {
      console.log("Password too short");
    }
  }
}

const u = new User();
u.password = "123"; // Too short
u.password = "123456"; // Set successfully
console.log(u.password);
