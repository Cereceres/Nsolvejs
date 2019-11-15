
module.exports = function () {
  Array.prototype.indexOfItem = function (item) {
    for (let i = 0, l = this.length; i < l; i++) {
      if (item instanceof Array) {
        if (item.similarly(this[i])) return i;
      } else if (this[i] === item) return i;
    }


    return -1;
  };
  Object.defineProperty(Array.prototype, 'indexOfItem', {
    enumerable: false,
  });
  Array.prototype.similarly = function (array) {
    const keys = Array.from(array);
    if (this.length !== keys.length) return false;

    let index;
    for (let i = 0, l = this.length; i < l; i++) {
      index = keys.indexOfItem(this[i]);
      if (index === -1) return false;

      if (this[i] instanceof Array && keys[index] instanceof Array) {
        if (!this[i].similarly(keys[index])) return false;
      } else if (this[i] !== keys[index]) return false;

      keys.splice(index, 1);
    }
    return true;
  };
  Object.defineProperty(Array.prototype, 'similarly', {
    enumerable: false,
  });
};
