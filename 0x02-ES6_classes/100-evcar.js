import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
