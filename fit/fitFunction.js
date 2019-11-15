
module.exports = function (nameF, equationFit) {
  const Fname = {
    linear(x) {
      return equationFit[1] * x + equationFit[0];
    },
    exponential(x) {
      return equationFit[0] * Math.exp(equationFit[1] * x);
    },
    logarithmic(x) {
      return equationFit[0] + equationFit[1] * Math.log(x);
    },
    power(x) {
      return equationFit[0] * Math.pow(x, equationFit[1]);
    },
    polynomial(x) {
      return equationFit[0] + equationFit[1] * x + equationFit[2]
        * x * x;
    },
    inverse(x) {
      return equationFit[1] / (x - equationFit[0]);
    },
    sqrt(x) {
      return equationFit[1] * Math.sqrt(x) + equationFit[0];
    },
  };
  return Fname[nameF];
};
