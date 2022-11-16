function solution(a, b) {
  let result = a < b ? a : b;

  while (a !== b) {
    result += a < b ? ++a : ++b;
  }

  return result;
}

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;

  return s;
}
