// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:
//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

// Brute force approach
const getFactors = num => {
  const factors = [];
  for(let i = 1; i <= num; i++){
    if(num % i === 0){
      factors.push(i)
    }
  }
  return factors;
}

const getNthTriangleNum = n => {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

const primesLessThan10000 = () => {
  const array = [...Array(10000).fill('true')];
  for(let i = 2; i < 100; i++){
    if(array[i]){
      for(let j = i * i; j < array.length; j += i){
        array[j] = false;
      }
    }
  }
  return array.map((n, i) => {
    if(n){
      return i;
    }
  })
  .splice(2, array.length - 1)
  .filter(n => n !== undefined);
}

const isPrime = num => {
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return num > 1;
}

const findDivisorsWithPrimes = num => {
  const primesArray = primesLessThan10000();
  let currentValue = num;
  let index = 0;
  let primes = [];
  let done = false;

  while(!done){
    if(isPrime(currentValue)){
      primes.push(currentValue);
      done = true;
    } 
    else if(currentValue % primesArray[index] === 0){
      primes.push(primesArray[index]);
      currentValue = currentValue / primesArray[index];
    }
    else index++;
  }

  return Object.values(
    primes.reduce((acc, curr) => {
      if(!acc[curr]) acc[curr] = 1;
      else acc[curr]++;
      return acc;
    }, {}))
    .reduce((acc, curr) => acc * (curr + 1), 1);
}


const triangleFactorFive = () => {
  let n = 2;
  let numOfFactors = findDivisorsWithPrimes(getNthTriangleNum(n));
  while(numOfFactors < 501){
    n++;
    numOfFactors = findDivisorsWithPrimes(getNthTriangleNum(n));
  }
  return getNthTriangleNum(n);
}

console.log(triangleFactorFive())
