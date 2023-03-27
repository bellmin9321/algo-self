// my solution
var sumZero = function (n) {
  const ans = [];

  if (n % 2 !== 0) ans.push(0);
  for (let i = 1; i < Math.ceil((n + 1) / 2); i++) {
    ans.push(-i, i);
  }

  return ans;
};

// best
var sumZero = function (n) {
  let num = Math.floor(n / 2);
  let res = [];

  for (let i = 1; i <= num; i++) {
    res.push(i, -i);
  }

  if (n % 2 !== 0) {
    res.push(0);
  }

  return res;
};

// 2nd
/*
We can simply add 1 to n-1 and keep track of this array sum and add the negation of that.
*/
var sumZero = function (n) {
  let sum = 0,
    res = [];

  for (let i = 1; i < n; i++) {
    res.push(i);
    sum += i;
  }

  res.push(-sum);

  return res;
};

// 3rd
const sumZero = n => [...new Array(n).keys(), ((1 - n) * n) / 2].slice(1);
