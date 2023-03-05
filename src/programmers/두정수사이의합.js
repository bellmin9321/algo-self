function solution(a, b) {
  if (a === b) return a;
  let sum = 0;

  if (a < b) {
    while (a !== b + 1) {
      sum += a++;
    }
  } else if (a > b) {
    while (a + 1 !== b) {
      sum += a--;
    }
  }

  return sum;
}
