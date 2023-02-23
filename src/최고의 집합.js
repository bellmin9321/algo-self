// my solution
function solution(n, s) {
  if (s < n) return [-1];
  let result = [];

  while (n > 0) {
    result.push(Math.floor(s / n));
    s -= Math.floor(s / n--);
  }

  return result;
}
