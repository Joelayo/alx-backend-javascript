import Building from './5-building'; // import the Building class

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // Setter for the floors attribute
  set floors(value) {
    this._floors = value;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
