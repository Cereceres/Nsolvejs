'use strict';
var  f = require('./fitFunction'),
     betterfit = require('./betterfit'),
     smoothingdata = require('./smoothingdata'),
     noiseeliminatedata = require('./noise_eliminator'),
     getx = require('./getx'),j,fit={},
     length_query ,array_y= [] ,array_x=[],interval;

/** @function
 * This function calculate the best fit to a Array given and make
 * a calculus of second argument with get_y and first argument with
 * get_x.
 * @param {Array} arrayFit, {Array} get_y,  {Array} get_x
 * @return {Object} fit
 */
module.exports = function(_arrayFit, get_y, get_x,options ) {
    if(!_arrayFit){return ;}
   options = options ||
   {smoothing : true, noiseeliminate : true,
     smoothingmethod :'exponential',alpha : 0.8 } ;
    if(options.smoothing === undefined){options.smoothing = true ;}
    if(options.noiseeliminate === undefined){options.noiseeliminate = true;}
   options.smoothingmethod = options.smoothingmethod || 'exponential' ;
   options.alpha = options.alpha || 0.8 ;
   var smoothing = options.smoothing, alpha = options.alpha, smoothingmethod = options.smoothingmethod,noiseeliminate= options.noiseeliminate,arrayFit ;
   // The noise is elimanated from data.
   console.log('noiseeliminate =',noiseeliminate);
   if(noiseeliminate){
     _arrayFit = noiseeliminatedata(_arrayFit,{method :smoothingmethod, alpha : alpha});
   }
   // The data are smoothed.
   console.log('smoothing =',smoothing);
   if(smoothing){
     _arrayFit = smoothingdata(_arrayFit,{method :smoothingmethod, alpha : alpha});
   }
   arrayFit = _arrayFit ;
   var  a = arrayFit[0][0] ,b =arrayFit[arrayFit.length-1][0] ;
   get_y = get_y || [] ;
   length_query = get_y.length ;
   get_x = get_x || [] ;
   // Find the best fit.
   fit = betterfit(arrayFit) ;
   // Calculate the values of "y" using get_y.
   for (j = 0; j < length_query; j++){
   array_y[j]  = [] ;
   array_y[j][1] = f(get_y[j],
                            fit.best.name,
                            fit[fit.best.name].regression.equation
                           ) ;
   array_y[j][0] = get_y[j];
   }
   // Choices the best  interval to solve the equation fit(x)=get_x.
   if( fit.best.name  !== 'logarithmic'){
     interval = [a-6*(b-a),b+6*(b-a)];
   } else {
     interval = [a<0 ? 0.01 : a,b+5*(b-a)];
   }
  // Obtain the values "x" using get_x.
   array_x = getx(fit.best.f,get_x, interval) ;
   return {ans_ofY : array_y,
         ans_ofX : array_x,
         fitUsed  : fit.best.name ,
         fitEquationUsed : fit[fit.best.name].regression.string,
         fitParamsUsed   : fit[fit.best.name].regression.equation,
         fitPointsUsed   : arrayFit,
         fitWithError    : fit.best.error,
         fit             : fit
         };
} ;
