// my solution
var replaceDigits = function (s) {
  const arr = [...s];

  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = String.fromCharCode(arr[i - 1].charCodeAt() + +arr[i]);
  }

  return arr.join('');
};

// best
var replaceDigits = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      res += String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]));
    } else {
      res += s[i];
    }
  }
  return res;
};

// 2nd
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  for (let i = 1; i < s.length; i += 2) {
    let str = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
    s = s.replace(s[i], str);
  }
  return s;
};
