'use strict';
/**@function
 * The function to use in the fit.
 * @param {Number} variable x, {String} nameF, {Array} equationFit.
 * @return {Function}.
 */

module.exports = function (x,nameF,equationFit) {
    var Fname =  {
        linear: function (x) {
          return  equationFit[0] * x + equationFit[1] ;
          } ,

         exponential:  function (x) {
            return equationFit[0] * Math.exp(equationFit[1]*x) ;
         },

         logarithmic: function (x) {
           return equationFit[0] + equationFit[1]*Math.log(x) ;
         },

        power : function (x) {
              return equationFit[0]* Math.pow(x , equationFit[1]) ;
            } ,
        polynomial: function (x) {
        return equationFit[0] + equationFit[1] * x + equationFit[2] * x * x;
      }

    };
return Fname[nameF](x) ;
};
