// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const numDict = {
  0: 0,
  1: 3,
  2: 3,
  3: 5,
  4: 4,
  5: 4,
  6: 3,
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 6,
  12: 6,
  13: 8,
  14: 8,
  15: 7,
  16: 7,
  17: 9,
  18: 8,
  19: 8,
  20: 6,
  30: 6,
  40: 6,
  50: 5,
  60: 5,
  70: 7,
  80: 6,
  90: 6,
  000: 7,
  0000: 8
}

const numberLetterCounter = limit => {
  if(limit > 1000) throw new Error('numberLetterCounter input cannot exceed 1000');
  let total = 0;
  for(let i = 1; i <= limit; i++){
    if(i < 20) total += numDict[i];
    else {
      const numAsString = i.toString();
      if(numAsString.length === 2) total += numDict[+(numAsString.charAt(0) + '0')] + numDict[+numAsString.charAt(1)];
      else if(numAsString.length === 3){
        if(+numAsString.substr(1, 2) < 20) total += numDict[+numAsString.charAt(0)] + numDict[000] + 3 + numDict[+numAsString.substr(1, 2)];
        else total += numDict[+numAsString.charAt(0)] + numDict[000] + 3 + numDict[+(numAsString.charAt(1) + '0')] + numDict[+numAsString.charAt(2)];
      }
      else total += numDict[1] + numDict[0000];
    }
  }
  return total;
}

console.log(numberLetterCounter(12));