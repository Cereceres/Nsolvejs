'use strict' ;
var x = require('./multi');
var plus = require('./sum');
var scalar = require('./pscalar'),
pow = require('./pow'),
adj =require('./adj'),
det =require('./det'),
inv =require('./inverse'),
minor = require('./minor'),
trans = require('./trans'),
matrix_nxm = require('./matrix_nxm'),
map = require('./map'),
truncate = require('../utils/truncate'),
forEach = require('./foreach');
var identM= require('./identM');
var zeros = require('./zeros');
var ones = require('./ones');
var _x =  require('./multiDirect');
var _pow = require('./powDirect');
    /** @constructor
     * Constructor of a matrix.
     * @param {Array}
     */
var matrix =  function (array){
      if (!array) { return ;}
      var length = array.length,i  ;
      var test = Boolean(length);
      if(test && array[0] instanceof Array){
        var first_lenght = array[0].length;
        for (i=0 ;i<length;i++){
          if(array[i].length !== first_lenght){ test = false;}
        }
        if (test) {
          this._ = function (i,j) {
            if (i !== undefined && j !== undefined) {
              return array[i-1][j-1];
            } else   if (i !== undefined && j === undefined)  {
              return (new matrix(array[i-1])).trans() ;
            }else   if (i === undefined && j !== undefined)  {
              return this.trans()._(j).trans() ;
            }
          };
          this.row =length ;
          this.column = first_lenght ;
          this.array = array;
          this.adj =  function (){
              return adj(this);
          } ;
          this.inv =  function (){
              return inv(this) ;
          };
          this.det = function () {
              return  det(this) ;
          };
          this.trans =  function (){
            return trans(this);
          };
          this.x = function (A,cb) {
            return x(this,A,cb);
          };
          this._x = function (A,cb) {
            return _x(this,A,cb);
          };
          this.plus = function (A,cb) {
            return plus(this,A,cb);
          };
          this.scalar = function (alpha,cb) {
            return scalar(alpha,this,cb);
          };
          this.pow = function (n,cb) {
            return pow(this,n ,cb);
          };
          this._pow = function (n,cb) {
            return _pow(this,n ,cb);
          };
          this.minor = function (i,j,cb) {
            return minor(i,j,this,cb);
          };
          this.map = function (cb,_cb) {
            return map(cb,this,_cb);
          };
          this.truncate = function (n,cb) {
            var _truncate = function (item) {
              return truncate(item,n);
            };
            return map(_truncate,this,cb);
          };
          this.forEach = function (map,cb) {
            forEach(map,this,cb);
          };
        }
    }
};
matrix.adj =adj;
matrix.det =det;
matrix.inv =inv;
matrix.minor = minor;
matrix.pscalar  =  scalar ;
matrix.sum = plus ;
matrix.trans = trans;
matrix.multiply  = x ;
matrix.multiplyDirect  = _x
matrix.pow = pow;
matrix._pow = _pow;
matrix.map = map;
matrix.forEach = forEach;
matrix.create = matrix_nxm;
matrix.diagonal = identM;
matrix.zeros = zeros
matrix.ones = ones


module.exports = matrix ;
