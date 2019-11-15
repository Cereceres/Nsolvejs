function sum(j, n, map) {
  let _sum = 0;
  for (let i = j; i <= n; i++) _sum += map(i);

  return _sum;
}
module.exports = function (j, n, map, cb) {
  if (cb && typeof cb === 'function') {
    setImmediate(() => {
      cb(sum(j, n, map));
    });
  } else return sum(j, n, map);
};
