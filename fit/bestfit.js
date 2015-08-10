'use strict';
var  f = require('./fitFunction'),
    betterfit = require('./betterfit'),
    fits_name, j,fit={},
     length_query ,array_answered= [];


fits_name = ['linear','exponential','logarithmic','power','polynomial'];

module.exports = function (arrayFit, array_toQuery) {
 array_toQuery = array_toQuery || [] ;
 arrayFit      = arrayFit || [];
 length_query = array_toQuery.length ;
 fit = betterfit(arrayFit) ;
   for (j = 0; j < length_query; j++){
   array_answered[j]  = [] ;
   array_answered[j][1] = f(array_toQuery[j],
                            fit.best.name,
                            fit[fit.best.name].regression.equation
                           ) ;
   array_answered[j][0] = array_toQuery[j];
 }
 return {ansArray : array_answered,
         fitUsed  : fit.best.name ,
         fitEquationUsed : fit[fit.best.name].regression.string,
         fitParamsUsed   : fit[fit.best.name].regression.equation,
         fitPointsUsed   : fit[fit.best.name].regression.points,
         fitWithError    : fit.best.error,
         fit             : fit
         };
} ;
