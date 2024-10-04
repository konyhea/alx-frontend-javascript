export default class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Store year in a private attribute
    this._location = location; // Store location in a private attribute
  }

  get year() {
    return this._year; // Getter for year
  }

  get location() {
    return this._location; // Getter for location
  }
}
