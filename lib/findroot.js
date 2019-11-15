
const methodN = require('./methodN');

/** @function
 * function that found the root of equation g(x)=0 try in interval ([a,b]) beginning on initialpoint using the options. Here is try by every method available into methodN until find one solution.
 * @param {Function} g  {Array} interval {Number} initialpoint {Object} options.
 * @return {Object} solution with properties Root found, numSteps and method's name used.
 */
function findroot(g, interval, initialpoint, options) {
  if (!g) return;

  if (typeof initialpoint === 'object') {
    options = initialpoint;
    initialpoint = undefined;
  }
  options = options || {
    npointsDNumeric: 10000,
    presicion: 0.001,
    nstepsmax: 10000,
  };
  options.presicion = options.presicion || 0.001;
  options.npointsDNumeric = options.npointsDNumeric || 10000;
  options.nstepsmax = options.nstepsmax || 10000;
  let Root; let prop; let
    solution;
  for (prop in methodN) {
    solution = methodN[prop](g, interval, initialpoint, options);
    if (solution) Root = solution.Root;

    if (Root) break;
  }
  return solution;
}

/** Here we wrapper the function to maje a non-blocking */
module.exports = findroot;
