const log10 = require('../utils/log10');

module.exports = function (arraytosmoothing, options) {
  options = options || {
    method: 'exponential',
    alpha: 0.8,
  };
  options.method = options.method || 'exponential';
  options.alpha = options.alpha || 0.8;
  const _array = arraytosmoothing;
  const arraysmoothed = [];
  const { method } = options;
  if (method !== 'exponential') return arraysmoothed;
  let i; let t; let x_t; let s_t_1; let s_t;
  let { alpha } = options;
  const beta = 1 - alpha;
  const { length } = _array;
  if (alpha > 1) alpha = Math.pow(10, Math.floor(log10(alpha) + 1));

  arraysmoothed[0] = [_array[0][0], _array[0][1]];
  s_t_1 = _array[0][1];
  for (i = 1; i < length; i++) {
    t = _array[i][0];
    x_t = _array[i][1];
    s_t = alpha * x_t + beta * s_t_1;
    arraysmoothed[i] = [t, s_t];
    s_t_1 = s_t;
  }

  return arraysmoothed;
};
