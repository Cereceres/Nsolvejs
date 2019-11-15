
const f = require('./fitFunction');
const finv = require('./fitFunctionInv');
const betterfit = require('./betterfit');
const smoothingdata = require('./smoothingdata');
const noiseeliminatedata = require('./noise_eliminator');
const fn = require('./fitf(x)');
const fninv = require('./fitfinv(x)');

const _ = {};
_.clone = require('../utils/clone');
const getx = require('./getx');
const gety = require('./gety');
const Fit = require('./Fit');
const setparams = require('./setparams_bestfit');

let fit = {};
let array_y = [];
let _fit; let array_x = [];
let _setparams;


const bestfit = function (_arrayFit, get_y, get_x, options) {
  if (!_arrayFit) return;

  _setparams = setparams(get_y, get_x, options);
  get_x = _setparams.get_x;
  get_y = _setparams.get_y;
  options = _setparams.options;
  const { fits_name } = options;
  const { smoothing } = options;
  const { alpha } = options;
  const { smoothingmethod } = options;
  const { noiseeliminate } = options;
  let arrayFit = [];
  let a;
  let b;
  const { using } = options;

  if (!(_arrayFit instanceof Array)) {
    fit = _.clone(_arrayFit.fit, true);
    arrayFit = _.clone(_arrayFit.fitPointsUsed, true);
    a = arrayFit[0][0];
    b = arrayFit[arrayFit.length - 1][0];
  } else {
    const l = _arrayFit.length;
    let j;
    for (j = 0; j < l; j++) arrayFit[j] = [_arrayFit[j][using[0]], _arrayFit[j][using[1]]];

    if (l === 1) arrayFit.unshift([0, 0]);

    a = arrayFit[0][0];
    b = arrayFit[l - 1][0];
    if (noiseeliminate) arrayFit = noiseeliminatedata(arrayFit);


    if (smoothing) {
      arrayFit = smoothingdata(arrayFit, {
        method: smoothingmethod,
        alpha,
      });
    }


    fit = betterfit(arrayFit, fits_name);
  }

  function h(x) {
    return f(fit.best.name, fit[fit.best.name].regression.equation)(x);
  }

  array_y = gety(h, get_y);

  const hinv = function (x) {
    return finv(fit.best.name, fit[fit.best.name].regression.equation)(x);
  };

  array_x = getx(hinv, get_x);

  _fit = {
    ans_ofY: array_y,
    ans_ofX: array_x,
    fitOptions: options,
    fitUsed: fit.best.name,
    fit_f: eval(fn(fit.best.name, fit[fit.best.name].regression.equation)),
    fit_finv: eval(fninv(fit.best.name, fit[fit.best.name].regression.equation)),
    fitParamsUsed: fit[fit.best.name].regression.equation,
    fitPointsUsed: arrayFit,
    fitWithError: fit.best.error,
    fitFunction: fit.best.f,
    fit,
  };

  const fit_ = new Fit(_fit);
  return fit_;
};

module.exports = bestfit;
