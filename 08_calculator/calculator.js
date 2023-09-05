const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (n) {
  return n.reduce((a, b) => a + b, 0);
};

const multiply = function (n) {
  return n.reduce((a, b) => a * b, 1);
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n) {
  let total = 1;
  while (n > 1) {
    total *= n;
    n -= 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
