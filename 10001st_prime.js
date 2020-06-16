// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const isPrime = num => {
  for(let i = 2; i < num; i ++){
    if(num % i === 0) return false;
  }
  return num > 1;
}

const thePrimeFinder = num => {
  let encountered = 0;
  let testCase = 2;
  let latestPrime;
  while(encountered < num){
    if(isPrime(testCase)){
      encountered++;
      latestPrime = testCase;
    } 
    testCase++;
  }
  return latestPrime;
}

console.log(thePrimeFinder(10001));
