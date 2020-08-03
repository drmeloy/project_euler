// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const isTrip = (a, b, c) => {
  if(a ** 2 + b ** 2 === c ** 2) return true;
  return false;
}

const findTrips = () => {  
  for(let a = 1; a < 998; a++){
    for(let b = 1; b < 998; b++){
      for(let c = 1; c < 998; c++){
        if(isTrip(a, b, c) && a + b + c === 1000) return a * b * c;
      }
    }
  }
}

console.log(findTrips());
