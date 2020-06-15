// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const isPrime = num => {
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return num > 1;
}

const largestPrimeFactorial = num => {
  for(let i = 2; i < num; i++){
    if(isPrime(i)){
      if(num % i === 0){
        num = num / i;
      } 
    }
  }

  return num;
}

console.log(largestPrimeFactorial(600851475143));
