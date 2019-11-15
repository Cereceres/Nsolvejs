
let length_get_x; const array_x = [];
const arrayX = [];

module.exports = function (h, get_x) {
  if (!h) return;

  let i;
  length_get_x = get_x.length;
  for (i = 0; i < length_get_x; i++) {
    array_x[i] = [];
    arrayX[i] = h(get_x[i]);
    if (arrayX[i]) {
      array_x[i][0] = arrayX[i];
      array_x[i][1] = get_x[i];
    }
  }
  return array_x;
};
