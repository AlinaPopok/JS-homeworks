class Apartment {
  #residents = [];

  addResident(...persons) {
    persons.forEach((person) => this.#residents.push(person));
  }
}
export default Apartment;
