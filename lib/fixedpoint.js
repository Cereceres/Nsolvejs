
function fixedpoint(g, point_initial, options) {
  if (!g) return;
  if (point_initial instanceof Array) {
    point_initial = (point_initial[0] + point_initial[1]) / 2;
    options = arguments[3];
  }
  options = options || {
    presicion: 0.001,
    nstepsmax: 100,
  };
  const { presicion } = options;
  let x;
  let pivot = 0;

  function f(x) {
    return x + g(x);
  }
  x = point_initial;
  let Root;
  const nmax = options.nstepsmax;
  let n = 1;
  while (!Root && n < nmax && x !== Infinity) {
    pivot = x;
    x = f(pivot);
    if (Math.abs(x - pivot) <= presicion) Root = x;

    n++;
  }
  return {
    Root,
    numSteps: n,
    method: 'fixedpoint',
  };
}

module.exports = fixedpoint;
