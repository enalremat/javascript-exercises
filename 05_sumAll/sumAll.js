const sumAll = function (n1, n2) {
  let min = Math.min(n1, n2);
  let max = Math.max(n1, n2);
  let count = 0;
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || n1 < 0 || n2 < 0) {
    return 'ERROR';
  } else {
    for (let i = min; i <= max; i++) {
      count += i;
    }
    return count;
  }
};

// Do not edit below this line
module.exports = sumAll;
