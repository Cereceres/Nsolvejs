const xintersection = require('./Xintersection');

module.exports = function (A, B, f, presicion) {
  const x = xintersection(A, B);
  const y = f(x);
  if (Math.abs(y) <= presicion) return x;

  const test = A.y * y < 0;
  if (test) {
    B.x = x;
    B.y = y;
  } else {
    A.x = x;
    A.y = y;
  }
};
