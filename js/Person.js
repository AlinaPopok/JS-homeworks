class Person {
  #name = null;
  #gender = null;
  constructor(name, gender) {
    if (name === undefined || gender === undefined) {
      throw new Error("Please enter a valid info");
    }
    this.name = name;
    this.gender = gender;
  }

  set name(str) {
    if (typeof str !== "string" || str.trim().length < 3)
      throw new Error("Name must be at least 3 characters");
    this.#name = str;
  }

  set gender(str) {
    if (typeof str !== "string" || str.trim().length < 2)
      throw new Error("Enter your gender");
    this.#gender = str;
  }
  get name() {
    return this.#name;
  }
  get gender() {
    return this.#gender;
  }
}
export default Person;
