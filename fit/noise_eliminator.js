const _ = {};
_.clone = require('../utils/clone');
const fn = require('./fitf(x)');
const betterfit = require('./betterfit');

const flatted = function (arraynoisy, _fit) {
  let fit = _.clone(_fit, true);
  let sigma = fit.best.error;
  const { fits_name } = fit.fitOptions;
  const l = arraynoisy.length;
  let f = eval(fn(fit.best.name, fit[fit.best.name].regression.equation));
  let i; let limit; let arrayflattened; let error; let x; let
    n = 1;
  arrayflattened = _.clone(arraynoisy, true);
  limit = 3.5 * sigma;
  while (n !== 0) {
    i = 0;
    while (arrayflattened[i]) {
      x = arrayflattened[i][0];
      error = Math.abs(arrayflattened[i][1] - f(x));
      if (error >= limit) {
        arrayflattened.splice(i, 0);
        n++;
        i--;
      }
      i++;
    }
    n--;
    fit = betterfit(arrayflattened, fits_name);
    f = eval(fn(fit.best.name, fit[fit.best.name].regression.equation));
    sigma = fit.best.error;
    limit = 3.5 * sigma;
  }
  if (l !== arrayflattened.length) arrayflattened = _.clone(flatted(arrayflattened, fit), true);

  return arrayflattened;
};
module.exports = flatted;
