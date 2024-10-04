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

  // Override the default string description
  toString() {
    return `[object ${this._code}]`; // Format: [object CODE]
  }
}
