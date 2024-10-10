export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error(`${this.constructor.name} is an abstract class and cannot be instantiated directly.`);
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented in derived classes
  evacuationWarningMessage() {
    throw new Error(`Class extending ${this.constructor.name} must override evacuationWarningMessage`);
  }
}
