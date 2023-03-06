// my solution
// Runtime 49 ms Beats 98.78% | Memory 41.6 MB Beats 84.29%
var maximum69Number = function (num) {
  let max = num;
  let str = num + '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      const n = num + (9 - str[i] + '').padEnd(str.length - i, '0') * 1;

      if (max < n) max = n;
    }
  }

  return max;
};

// best
const maximum69Number = num => Number(num.toString().replace('6', '9'));

// 2nd
const maximum69Number = num => {
  if ((num / 1000) << 0 === 6) return num + 3000;
  if (((num / 100) << 0) % 10 === 6) return num + 300;
  if (((num % 100) / 10) << 0 === 6) return num + 30;
  if (num % 10 === 6) return num + 3;
  return num;
};

// 3rd
