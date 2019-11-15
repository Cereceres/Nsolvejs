module.exports = function (nameF, equationFit) {
  const Fname = {
    linear(x) {
      return (x - equationFit[0]) / equationFit[1];
    },
    exponential(x) {
      return Math.log(x / equationFit[0]) / equationFit[1];
    },
    logarithmic(x) {
      return Math.exp((x - equationFit[0]) / equationFit[1]);
    },
    power(x) {
      return Math.pow(x / equationFit[0], 1 / equationFit[1]);
    },
    polynomial(x) {
      return (-equationFit[1] + Math.sqrt(equationFit[1]
        * equationFit[1] - 4 * (equationFit[0] - x) * equationFit[
        2])) / (2 * equationFit[2]);
    },
    inverse(x) {
      return equationFit[1] / x + equationFit[0];
    },
    sqrt(x) {
      return Math.pow((x - equationFit[0]) / equationFit[1], 2);
    },
  };
  return Fname[nameF];
};
