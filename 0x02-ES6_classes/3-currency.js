export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute
  set code(value) {
    this._code = value;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(value) {
    this._name = value;
  }

  // Method that returns a string with the currency's name and code
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
