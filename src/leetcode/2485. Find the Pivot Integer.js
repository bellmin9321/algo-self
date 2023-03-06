// my solution
var pivotInteger = function (n) {
  let sum1 = 0;
  let sum2 = n;

  for (let i = 1; i <= n; i++) {
    sum1 += i;
  }

  for (let i = 1; i <= n; i++) {
    if (sum1 === sum2) return n;
    sum1 -= n;
    sum2 += --n;
  }

  return -1;
};

// best
var pivotInteger = function (n) {
  for (let i = 1; i <= n; i++) {
    let leftOfPivot = (i * (i + 1)) / 2;
    let rightOfPivot = (n * (n + 1)) / 2 - leftOfPivot + i;
    if (leftOfPivot === rightOfPivot) return i;
  }

  return -1;
};

// 2nd
var pivotInteger = function (n) {
  // x^2 = (n^2 + n) / 2

  const k = (n * n + n) / 2;
  const x = Math.trunc(Math.sqrt(k));

  return x * x === k ? x : -1;
};
