const _ = {};
_.clone = require('../utils/clone');

let length; var random_position; let position; var
  random_position;

module.exports = function (search, arraytosearch) {
  const array_to_search = _.clone(arraytosearch, true);
  let found;
  length = array_to_search.length;
  found = false;
  while (!found) {
    random_position = Math.floor(Math.random() * length);
    if (array_to_search[random_position] <= search && search
      <= array_to_search[random_position + 1]) {
      found = true;
      position = random_position;
    }
  }
  return {
    position,
    search,
  };
};
