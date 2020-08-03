// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// ***
// MY SOULTION! DID NOT WORK... BUT WHY?
// ***

// const isPrime = num => {
//   for(let i = 2; i < Math.sqrt(num); i++){
//     if(num % i === 0) return false
//   }
//   return num > 1;
// }

// const summation = () => {
//   let sum = 0;
//   for(let i = 2; i < 2000000; i++){
//     if(isPrime(i)) sum += i;
//     console.log(i);
    
//   }
//   return sum;
// }

// console.log(summation());

// ***
// FOUND ONLINE
// ***

var primes = [];
var sum = 0;
var perimeter = 2000000;

for (var i = 0; i < perimeter; i++) {
  primes.push(true);
}

for (var i = 2; i < Math.sqrt(perimeter); i++) {
  if (primes[i]) {
    for (var j = i * i; j < primes.length; j += i) {
      primes[j] = false;
    }
  }
}

for (var i = 2; i < primes.length; i++) {
  if (primes[i]) {
    sum += i;
  }
}

console.log(sum);