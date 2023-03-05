function solution(n) {
  let total = 0;
  let factor = 1;

  while (factor <= n) {
    n % factor ? factor++ : (total += factor++);
  }

  return total;
}
