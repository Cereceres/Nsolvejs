
const regression = require('regression');

const _ = {};
_.clone = require('../utils/clone');
const f = require('./fitFunction');

let i; let j; const fit = {};
let x; let array_Cloned; let length;
let error = 0;
let best_fit = '';
let best_fit_error;
let length_namefit;

const better = function (array_tofit, fits_name) {
  fits_name = fits_name || ['linear',
    'exponential',
    'logarithmic',
    'power',
    'polynomial',
    'inverse',
    'sqrt',
  ];
  length_namefit = fits_name.length;
  array_Cloned = _.clone(array_tofit, true);
  length = array_tofit.length - 1;
  best_fit = fits_name[0];
  best_fit_error = 0;
  let l; let m; let
    pivot;

  for (i = 0; i < length_namefit; i++) {
    if (fits_name[i] === 'inverse') {
      l = array_tofit.length;
      const array_inverse = _.clone(array_tofit, true);
      for (m = 0; m < l; m++) {
        pivot = array_inverse[m][0];
        array_inverse[m][0] = 1 / array_inverse[m][1];
        array_inverse[m][1] = pivot;
      }
      fit[fits_name[i]] = {
        regression: regression.linear(array_inverse),
      };
    } else if (fits_name[i] === 'sqrt') {
      l = array_tofit.length;
      const array_sqrt = _.clone(array_tofit, true);
      for (m = 0; m < l; m++) array_sqrt[m][0] = Math.sqrt(array_sqrt[m][0]);

      fit[fits_name[i]] = {
        regression: regression.linear(array_sqrt),
      };
    } else if (regression[fits_name[i]]) {
      fit[fits_name[i]] = {
        regression: regression[fits_name[i]](array_Cloned),
      };
    }

    error = 0;

    for (j = 0; j < length; j++) {
      x = array_tofit[j][0];
      error += (array_tofit[j][1] - f(fits_name[i], fit[
        fits_name[i]].regression.equation)(x)) * (array_tofit[j][1]
        - f(fits_name[i], fit[fits_name[i]].regression.equation)(x));
    }
    error = Math.sqrt(error / length);
    fit[fits_name[i]].error = error;
    if (best_fit_error === 0) best_fit_error = error;

    if (error < best_fit_error) {
      best_fit = fits_name[i];
      best_fit_error = error;
    }
  }

  fit.best = {
    name: best_fit,
    error: best_fit_error,
    f: f(best_fit, fit[best_fit].regression.equation),
  };
  return fit;
};

module.exports = better;
