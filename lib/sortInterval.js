
module.exports = function(interval) {
    let a;
    if (interval[1] < interval[0]) {
        a = interval[1];
        interval[1] = interval[0];
        interval[0] = a;
    }
};
