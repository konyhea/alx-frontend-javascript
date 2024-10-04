export default class Airport {
  constructor(name, code) {
    // Validate and store the name attribute
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    // Validate and store the code attribute
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Default string description of the class
  toString() {
    return this._code; // Returns the airport code
  }
}
