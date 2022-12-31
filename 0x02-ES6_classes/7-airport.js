export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getters for the name and code attributes
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setters for the name and code attributes
  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  // Default string description of the class
  toString() {
    return this.code;
  }
}
