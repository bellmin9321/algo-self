// 내 풀이 : BigInt를 이용한 풀이
var plusOne = function (digits) {
  let numStr = digits.join('');
  const bigSum = BigInt(numStr) + 1n;

  return (bigSum + '').slice(0, bigSum.length).split('');
};

// 배열을 이용한 풀이
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};
