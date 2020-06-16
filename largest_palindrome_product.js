// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = num => String(num) === String(num).split('').reverse().join('');

const findPalindrome = () => {
  let result = 0;

  for(let a = 100; a <= 999; a++){
    for(let b = 100; b <= 999; b++){
      if(isPalindrome(a * b) && a * b > result) result = a * b;
    }
  }

  return result;
}

console.log(findPalindrome());
