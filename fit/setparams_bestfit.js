module.exports = function (get_y, get_x, options) {
  if (get_x && get_x.length === undefined) {
    options = get_x;
    get_x = undefined;
  }
  if (get_y && get_y.length === undefined) {
    options = get_y;
    get_y = undefined;
  }
  if (!options) {
    options = {
      using: [0, 1],
      smoothing: false,
      noiseeliminate: false,
      smoothingmethod: 'exponential',
      alpha: 0.9,
      fits_name: ['linear', 'exponential', 'logarithmic', 'power', 'polynomial', 'inverse', 'sqrt'],
    };
  }

  if (options.smoothing === undefined) options.smoothing = false;

  if (options.noiseeliminate === undefined) options.noiseeliminate = false;

  options.smoothingmethod = options.smoothingmethod || 'exponential';
  options.alpha = options.alpha || 0.9;
  options.using = options.using || [0, 1];
  options.fits_name = options.fits_name || ['linear', 'exponential', 'logarithmic', 'power', 'polynomial', 'inverse', 'sqrt'];
  if (!get_x) get_x = [];

  if (!get_y) get_y = [];

  return {
    get_x,
    get_y,
    options,
  };
};
