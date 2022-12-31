export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.checkEvacuationWarningMessageImplementation();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  checkEvacuationWarningMessageImplementation() {
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
