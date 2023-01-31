/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const strX = x + '';
  const middle = Math.floor(strX.length / 2);

  for (let i = 0; i < middle; i++) {
    if (strX[i] !== strX[strX.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// 다른 풀이
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversed = (x + '').split('').reverse().join('');

  if (x === Number(reversed)) return true;

  return false;
};
