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

  // Default string description of the class
  toString() {
    return this.code;
  }
}
