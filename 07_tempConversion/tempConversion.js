const convertToCelsius = function (f) {
  let f2c = (f - 32) / 1.8;
  return Number.isInteger(f2c) ? f2c : +f2c.toFixed(1);
};

const convertToFahrenheit = function (c) {
  let c2f = c * 1.8 + 32;
  return Number.isInteger(c2f) ? c2f : +c2f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
