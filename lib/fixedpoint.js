'use strict' ;
  /** @function
   * function that found the root of equation g(x)=0 by the method fixed point. To do that define, the previous equation is equivalent  to g(x)+x=x.
   * @param {Function} g  {Array} initialpoint {Object} options.
   * @return {Object} solution with properties Root found, numSteps and method's name used.
   */
module.exports =  function (g,point_initial ,options) {
  // Because of this method is very fast to converge but little effective, the nstepsmax is set to only 10 steps.
         options = options || { presicion : 0.001 , nstepsmax : 100 } ;
         var presicion = options.presicion ;
         var x , pivot = 0;
         function f(x) {
           return x + g(x);
         }
         x = point_initial  ;
         var Root ;
         var nmax = options.nstepsmax ;
         var n = 1 ;

         while (!Root && n < nmax && x != Infinity) {
         pivot = x ;
         x = f(pivot) ;
         if (Math.abs( x - pivot ) <= presicion){ Root = x ; }
         n++ ;
         }

    return {Root : Root, numSteps : n , method : 'fixedpoint' } ;
};
