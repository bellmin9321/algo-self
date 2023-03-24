// my solution
var isSameAfterReversals = function (num) {
  const str = String(num);
  if (str.length === 1) return true;
  return str[str.length - 1] !== '0';
};

// best
var isSameAfterReversals = function (num) {
  if (num == 0) return true;
  if (num % 10 == 0) return false;
  return true;
};

// best2
var isSameAfterReversals = function (num) {
  return num == 0 || num % 10 != 0;
};

// 2nd
var isSameAfterReversals = function (num) {
  return !num || num % 10;
};
