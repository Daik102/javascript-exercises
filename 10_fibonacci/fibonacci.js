const fibonacci = function(number) {
  let result = 0;
  let fMinusTwo = 0;
  let fMinusOne = 1;
  const num = Number(number);

  if (num < 0) return 'OOPS';
  if (num === 1) return fMinusOne;
  
  for (let i = 2; i <= num; i++) {
    result = fMinusTwo + fMinusOne;
    fMinusTwo = fMinusOne;
    fMinusOne = result;
  }
   return result; 
  }

// Do not edit below this line
module.exports = fibonacci;
