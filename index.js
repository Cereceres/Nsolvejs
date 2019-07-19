const utils = require('./utils/utils');
const methodN = require('./lib/methodN');
const defaultOptions = {
    npointsDNumeric: 1000,
    presicion: 0.001,
    nstepsmax: 1000,
    method: 'Newton_Raphson'
};
const nsolveqn = function(g, interval, initialpoint, options = defaultOptions) {
    if (!g) return;

    options.presicion = options.presicion || 0.001;
    options.npointsDNumeric = options.npointsDNumeric || 1000;
    options.nstepsmax = options.nstepsmax || 1000;
    options.method = options.method || 'Newton_Raphson';
    const method = options.method;
    return methodN[method](g, interval, initialpoint, options);
};

nsolveqn.calculusN = {
    Newton_Raphson: methodN.Newton_Raphson,
    bisection: methodN.bisection,
    fixedpoint: methodN.fixedpoint,
    regulafalsi: methodN.regulafalsi,
    Newton_Raphson_Higherorder: methodN.Newton_Raphson_Higherorder,
    findroot: require('./lib/findroot'),
    D: require('./lib/derivativeN'),
    D_opt: require('./lib/derivativeNopt')
};
nsolveqn.utils = utils;
module.exports = nsolveqn;
