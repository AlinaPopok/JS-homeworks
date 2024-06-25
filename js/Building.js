class Building {
  #apartmentsInBuilding = [];

  #maxApartmentsQuantity = null;
  constructor(maxApartmentsQuantity) {
    this.maxApartmentsQuantity = maxApartmentsQuantity;
  }

  addApartment(apartment) {
    if (this.#maxApartmentsQuantity > this.#apartmentsInBuilding.length) {
      this.#apartmentsInBuilding.push(apartment);
    } else {
      throw new Error(
        "The maximum number of apartments in the building has been exceeded",
      );
    }
  }

  set maxApartmentsQuantity(max) {
    this.#maxApartmentsQuantity = max;
  }

  get maxApartmentsQuantity() {
    return this.#maxApartmentsQuantity;
  }
}

export default Building;
