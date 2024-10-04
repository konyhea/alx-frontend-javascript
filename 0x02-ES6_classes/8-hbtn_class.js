export default class HolbertonClass {
  constructor(size, location) {
    // Validate and store the size attribute
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;

    // Validate and store the location attribute
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // When the class is cast into a Number
  valueOf() {
    return this._size; // Returns the size
  }

  // When the class is cast into a String
  toString() {
    return this._location; // Returns the location
  }
}
