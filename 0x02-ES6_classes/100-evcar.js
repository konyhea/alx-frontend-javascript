import Car from './10-car';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent constructor
    super(brand, motor, color);

    // Validate and store the range attribute
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this[_range] = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }

  // Optionally, you can add a getter for the range
  get range() {
    return this[_range];
  }
}
