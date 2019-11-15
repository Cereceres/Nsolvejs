
module.exports = function (nameF, equationFit) {
  const Fname = {
    linear: `(function (x) { return ${equationFit[1]} * x + ${
      equationFit[0]} ;})`,
    exponential: `(function(x){return ${equationFit[0]}*Math.exp(${
      equationFit[1]}*x) ;})`,
    logarithmic: `(function (x) {return ${equationFit[0]} + ${
      equationFit[1]}*Math.log(x) ;})`,
    power: `(function (x) {return ${equationFit[0]}* Math.pow(x , ${
      equationFit[1]}) ;} )`,
    polynomial: `(function (x) {return ${equationFit[0]} + ${
      equationFit[1]} * x + ${equationFit[2]} * x * x;})`,
    inverse: `(function (x) {return ${equationFit[1]}/ ( x - ${
      equationFit[0]});})`,
    sqrt: `(function (x) {return ${equationFit[0]}*Math.sqrt(x) + ${
      equationFit[1]} ;})`,
  };
  return Fname[nameF];
};
