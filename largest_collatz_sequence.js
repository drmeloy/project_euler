// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

const recurse = (num, memo = {}) => {
  if(memo[num]) return memo[num];
  if(num <= 1) return 1;
  let next;
  if(num % 2 === 0) {
    next = num / 2;
  }
  else {
    next = num * 3 + 1;
  }
  return memo[num] = 1 + recurse(next, memo)
}

const collatz = () => {
  const memo = {};
  let largestChain = 0;

  for(let i = 2; i < 1000000; i++){
    let currentChain;
    if(memo[i]) currentChain = memo[i];
    else {
      recurse(i, 1, memo);
      currentChain = memo[i];
    }
  }
    if(currentChain > largestChain) largestChain = currentChain;
    return largestChain;
};

let testMemo = {};
console.log(recurse(3, testMemo));
console.log(testMemo);