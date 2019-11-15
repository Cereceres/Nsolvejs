module.exports = function (item, n) {
  Number.prototype.truncate = function (n) {
    return Math.floor(this * Math.pow(10, n)) / Math.pow(10, n);
  };
  return item.truncate(n);
};
