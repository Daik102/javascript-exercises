const palindromes = function (string) {
  const char = /[a-z1-9]/g;
  const matched = string.toLowerCase().match(char);
  
  if (matched.join('') === matched.reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
