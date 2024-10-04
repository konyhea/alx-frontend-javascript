export default class Currency {
  constructor(code, name) {
    this._code = code; // Store code with underscore
    this._name = name; // Store name with underscore
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value; // Set the code
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value; // Set the name
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`; // Return in the format name (code)
  }
}
