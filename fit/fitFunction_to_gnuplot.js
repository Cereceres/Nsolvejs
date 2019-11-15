
Number.prototype.truncate = function (n) {
  return Math.floor(this * Math.pow(10, n)) / Math.pow(10, n);
};
module.exports = function (nameF, equationFit) {
  const Fname = {
    linear() {
      return `${equationFit[1].truncate(5)}*x+${equationFit[0].truncate(
        5,
      )}`;
    },
    inverse() {
      return `${equationFit[1].truncate(5)}/(x-${equationFit[0].truncate(
        5,
      )})`;
    },
    sqrt() {
      return `${equationFit[1].truncate(5)}*sqrt(x)+${equationFit[
        0].truncate(5)}`;
    },
    exponential() {
      return `${equationFit[0].truncate(5)}*exp(${equationFit[1].truncate(
        5,
      )}*x)`;
    },
    logarithmic() {
      return `${equationFit[0].truncate(5)}+${equationFit[1].truncate(
        5,
      )}*log(x)`;
    },
    power() {
      return `${equationFit[0].truncate(5)}*x**${equationFit[1].truncate(
        5,
      )}`;
    },
    polynomial() {
      return `${equationFit[0].truncate(5)}+${equationFit[1].truncate(
        5,
      )}*x+${equationFit[2].truncate(5)}*x**2`;
    },
  };
  return Fname[nameF]();
};
