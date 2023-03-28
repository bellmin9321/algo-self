// my solution
var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = min; i > 0; i--) {
    if (max % i === 0 && min % i === 0) return i;
  }
};

// best
const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

const findGCD = a => {
  let max = Math.max.apply(Math, a);
  let min = Math.min.apply(Math, a);
  return gcd(min, max);
};

// 2nd
const findGCD = nums => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return gcd(Math.max(...nums), Math.min(...nums));
};
