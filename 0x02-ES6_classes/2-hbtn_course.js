export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  // Getter for the length attribute
  get length() {
    return this._length;
  }

  // Setter for the length attribute
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('length must be a number');
    }
    this._length = value;
  }

  // Getter for the students attribute
  get students() {
    return this._students;
  }

  // Setter for the students attribute
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('students must be an array');
    }
    this._students = value;
  }
}
