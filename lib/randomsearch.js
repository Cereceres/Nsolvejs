'use strict';
var  _ = require('lodash');
var length, random_position, position, random_position;


module.exports = function (search, arraytosearch) {
  var array_to_search     = _.clone(arraytosearch,true), found;
      length              = array_to_search.length ;
      found               = false ;
      while (!found){
      random_position = Math.floor(Math.random()*length);
      if (   array_to_search[random_position] <= search <= array_to_search[random_position + 1 ] ){found = true ; position = random_position ;  }
      }
      return {position : position ,
              search : search    };
} ;
