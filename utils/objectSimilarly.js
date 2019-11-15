module.exports = function () {
  Object.prototype.similarly = function (obj) {
    const keys = Object.keys(obj);
    const thisKeys = Object.keys(this);
    if (keys.length !== thisKeys.length) return false;

    let index;
    for (let i = 0, l = thisKeys.length; i < l; i++) {
      index = keys.indexOf(thisKeys[i]);
      if (index === -1) return false;

      if (this[thisKeys[i]] instanceof Object && obj[keys[index]] instanceof Object) {
        if (!this[thisKeys[i]].equals(obj[keys[index]])) return false;
      } else if (this[thisKeys[i]] !== obj[keys[index]]) return false;

      keys.splice(index, 1);
    }
    return true;
  };
  Object.defineProperty(Object.prototype, 'similarly', {
    enumerable: false,
  });
};
