const regulafalsi = require('./regulafalsi');
const fixedpoint = require('./fixedpoint');
const bisection = require('./bisection');
const Newton_Raphson = require('./Newton_Raphson');
const Newton_Raphson_Higherorder = require('./Newton_Raphson_Higherorder');

/** @object
 * Define all the numeric methods that are availables in the module.
 */
module.exports = {
  Newton_Raphson_Higherorder,
  Newton_Raphson,
  fixedpoint,
  regulafalsi,
  bisection,
};
