export default class Building {
  constructor(sqft) {
    // Type checking to ensure sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // Prevent direct instantiation of the abstract class
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }

    // Store the attribute with an underscore
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by any subclass
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
