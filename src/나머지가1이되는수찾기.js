function solution(n) {
  let x = 2;

  while (n <= 1000000) {
    if (n % x !== 1) {
      x++;
      continue;
    } else {
      return x;
    }
  }
}

function solution(n) {
  let x = 1;

  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
