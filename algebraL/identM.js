'use strict';
var
dkronecker = require('../utils/dkronecker');
/** @function
 * Builder of Unit matrix.
 * @param {Number} the length of matrix.
 * @return {Object} matrix
 */
 function ident(n,m) {
   m= m || n
  var  Matrix= require('../algebraL/Mat');
  if (!n) { return ;}
  var array = [];
  for (var i = 0; i <n ; i++) {
      array[i]=[];
      for (var j = 0; j <m ; j++) {
          array[i][j]=dkronecker(i,j);
      }
  }
 return new Matrix(array);
}

module.exports = function (n,m,cb) {
  if (cb && typeof cb === 'function') {
    return new Promise(function(full,rej){
      try {
        full(cb(null,ident(n,m)))
      } catch (e) {
        rej(null,cb(e))
      }
    }
 )
  } else {
    return ident(n,m) ;
  }
};
