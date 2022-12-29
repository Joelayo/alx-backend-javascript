export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that should be implemented by classes that extend from Building
  evacuationWarningMessage(message = 'Class extending Building must override evacuationWarningMessage') {
    this._message = message;
    return this._message;
  }
}
