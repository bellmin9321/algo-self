function solution(n) {
  let leastMove = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      leastMove++;
    }
  }

  return leastMove;
}
