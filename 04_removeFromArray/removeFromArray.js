const removeFromArray = function (arr, ...num) {
  for (let i = 0; i < num.length; i++) {
    arr = arr.filter((n) => n !== num[i]);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
