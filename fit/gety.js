
module.exports = function (f, get_y) {
  if (!f) return;

  get_y = get_y || [];
  const array_y = [];
  let j;
  const length_query = get_y.length;
  for (j = 0; j < length_query; j++) {
    array_y[j] = [];
    array_y[j][1] = f(get_y[j]);
    array_y[j][0] = get_y[j];
  }
  return array_y;
};
