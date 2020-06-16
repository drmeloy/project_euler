// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const checkDivisibilityByTwenty = num => {
  for(let i = 20; i > 0; i--){
    if(num % i === 0) continue;
    else return false;
  }
  return true;
}

const findNum = () => {
  let result;
  let num = 1;
  while(!result){
    if(checkDivisibilityByTwenty(num)) result = num;
    else num++;
  }
  return result;
}

console.log(findNum());
