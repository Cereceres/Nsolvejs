const fs = require('fs');

const writeFile = function (path, array) {
  fs.writeFileSync(path, '\n');
  array.forEach((item) => {
    if (item[0] && item[1]) fs.appendFileSync(path, `${item[0].toString()} ${item[1]}\n`);
  });
};
module.exports = writeFile;
