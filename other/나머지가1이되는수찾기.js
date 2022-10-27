function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

const solution = function (n) {
  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
};
