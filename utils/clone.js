
function cloneObject(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const temp = obj.constructor(); // give temp the original obj's constructor
  for (const key in obj) temp[key] = cloneObject(obj[key]);

  return temp;
}
module.exports = cloneObject;
