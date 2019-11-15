module.exports = function () {
  Object.prototype.equals = function (obj) {
    const keys = Object.keys(obj);
    const thisKeys = Object.keys(this);
    if (keys.length !== thisKeys.length) return false;

    for (let i = 0, l = thisKeys.length; i < l; i++) {
      if (this[thisKeys[i]] instanceof Object && obj[keys[i]] instanceof Object) {
        if (!this[thisKeys[i]].equals(obj[keys[i]])) return false;
      } else if (this[thisKeys[i]] !== obj[keys[i]]) return false;
    }


    return true;
  };
  Object.defineProperty(Object.prototype, 'equals', {
    enumerable: false,
  });
};
