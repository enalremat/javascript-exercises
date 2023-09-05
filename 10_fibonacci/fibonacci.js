const fibonacci = function (n) {
  if (n < 0) {
    return 'OOPS';
  }
  let start = [1, 1];
  for (let i = 0; i < n - 2; i++) {
    start.push(start[i] + start[i + 1]);
  }
  return start.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
