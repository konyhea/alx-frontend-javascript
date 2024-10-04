// car.js
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    // Validate and store the attributes using symbols
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this[_brand] = brand;

    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this[_motor] = motor;

    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this[_color] = color;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }

  // Optionally, you can add getters to access the properties
  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }
}
