
const linear_interpolation = require('./linearinterpolation');
const derivativenumericOpt = require('./derivativenumericOpt');

const _ = {};
_.clone = require('../utils/clone');

const NumericalDerivateof = function (f, npoints, interval) {
  interval = _.clone(interval, true);
  const array_of_derivative = derivativenumericOpt(f, npoints, interval);
  //* * @method that define the derivative optimized of f(x)*/
  this.f_x = new linear_interpolation(array_of_derivative.dfdx_array).function_interpolated;
};
module.exports.NumericalDerivateof = NumericalDerivateof;
module.exports.linearinterapolation = linear_interpolation;
