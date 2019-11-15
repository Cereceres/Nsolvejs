const deltax = require('./deltax');
const sortInterval = require('./sortInterval');

module.exports = function (f, npoints, interval, pointsDistribution) {
  let x_n; let xpoints; let h; let a; let b; let N; let y_a; let y_b; let i; let y_n; let n; let x_n_1; let y_n_1; const
    df_dx = [];
  pointsDistribution = pointsDistribution || 'linear';
  sortInterval(interval);
  xpoints = deltax(npoints, interval, pointsDistribution).x_n_array;
  N = npoints;
  a = interval[0];
  b = interval[1];
  y_a = f(a);
  y_b = f(b);
  x_n_1 = a;
  y_n_1 = y_a;
  n = N - 1;
  for (i = 0; i <= n; i++) {
    x_n = xpoints[i + 1];
    y_n = f(x_n);
    h = x_n - x_n_1;
    h = h || 0.000000001;
    df_dx[i] = [];
    df_dx[i] = [x_n, (y_n - y_n_1) / h];
    df_dx[i][1] = df_dx[i][1] || 0.0000000001;
    x_n_1 = x_n;
    y_n_1 = y_n;
  }
  return {
    dfdx_array: df_dx,
    pointsdistribution: pointsDistribution,
  };
};
