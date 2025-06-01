const sumAll = function(para1, para2) {
  if(para1 < 0 || para2 < 0) return 'ERROR';
  if(!Number.isInteger(para1) || !Number.isInteger(para2)) return 'ERROR';
  if (para1 > para2) {
    const temp = para1;
    para1 = para2;
    para2 = temp;
  }
  let result = 0;
  for (let i = para1; i <= para2; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
