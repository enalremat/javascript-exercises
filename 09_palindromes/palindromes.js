const palindromes = function (str) {
  let parsed = str
    .match(/[a-z0-9]/gi)
    .join('')
    .toLowerCase();
  let reversed = [...parsed].reverse().join('');
  return reversed === parsed;
};

// Do not edit below this line
module.exports = palindromes;
