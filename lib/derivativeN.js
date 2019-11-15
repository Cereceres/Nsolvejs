const deltax = require('./deltax');
const derivativenumeric = require('./derivativenumeric');
const linear_interpolation = require('./linearinterpolation');

const _ = {};
_.clone = require('../utils/clone');

const NumericalDerivateof = function (f, npoints, interval) {
  interval = _.clone(interval, true);
  const array_of_derivative = derivativenumeric(f, npoints, interval);
  this.f_x = new linear_interpolation(array_of_derivative.dfdx_array).function_interpolated;
};
module.exports.NumericalDerivateof = NumericalDerivateof;
module.exports.deltax = deltax;
module.exports.derivativenumeric = derivativenumeric;
module.exports.linearinterapolation = linear_interpolation;
