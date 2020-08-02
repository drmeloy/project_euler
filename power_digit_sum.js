// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000?

const exponentNumAsString = (baseNum, exponent) => {
  let total = baseNum.toString();
  for(let i = 1; i < exponent; i++){
    const numArray = new Array(baseNum).fill(total);
    const step = numArray.reduce((acc, curr, i) => {
      if(i === 0) return acc = curr;
      let a, b, temp, digitsSum, carry = 0, sum = '';
      for(let j = 0; j < acc.length; j++){
        a = +acc.charAt(acc.length - 1 - j);
        b = +curr.charAt(curr.length - 1 - j)
        b = b ? b : 0;
        temp = (carry + a + b).toString();
        digitsSum = temp.charAt(temp.length - 1);
        carry = +temp.substr(0, temp.length - 1);
        carry = carry ? carry : 0;
        sum = (j === acc.length - 1) ? temp + sum : digitsSum + sum;
      }
      return acc = sum;
    }, '');
    total = step;
  }
  return total;
}

console.log(exponentNumAsString(2, 1000));