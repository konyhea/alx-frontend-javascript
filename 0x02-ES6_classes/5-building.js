export default class Building {
  constructor(sqft) {
    // Store the sqft attribute with an underscore
    this._sqft = sqft; // Expecting sqft to be a number

    // Check if the class is being instantiated directly
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
