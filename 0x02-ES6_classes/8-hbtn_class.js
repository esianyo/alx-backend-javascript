// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Casting to Number
  valueOf() {
    return this._size;
  }

  // Casting to String
  toString() {
    return this._location;
  }
}
