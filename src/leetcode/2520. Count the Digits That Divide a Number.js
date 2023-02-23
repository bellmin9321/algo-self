// my solutin
var countDigits = function (num) {
  const str = num + '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (num % +str[i] === 0) count++;
  }

  return count;
};

// best

var countDigits = function (num) {
  return [...String(num)].reduce(
    (acc, cur) => (acc += num % +cur === 0 ? 1 : 0),
    0,
  );
};
