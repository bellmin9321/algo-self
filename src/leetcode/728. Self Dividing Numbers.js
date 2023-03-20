// my solution
var selfDividingNumbers = function (left, right) {
  const selfNums = Array.from(Array(right - left + 1), (v, i) => left + i);
  return selfNums.filter(num => [...`${num}`].every(v => num % v === 0));
};

// best
var selfDividingNumbers = function (left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    String(i)
      .split('')
      .every(number => +number && !(i % number)) && result.push(i);
  }

  return result;
};

// 2nd
var selfDividingNumbers = function (left, right) {
  const result = [];

  // Loop throuh all numbers
  for (let number = left; number <= right; number++) {
    let digits = number;
    let valid = true;

    // Loop through all number digits
    while (digits > 1) {
      let lastDigit = digits % 10;

      // Check if zero or not self dividing
      if (!lastDigit || number % lastDigit !== 0) {
        valid = false;
        break;
      }

      // Remove last digit from the number
      digits = Math.floor(digits / 10);
    }

    if (valid) {
      result.push(number);
    }
  }

  return result;
};
