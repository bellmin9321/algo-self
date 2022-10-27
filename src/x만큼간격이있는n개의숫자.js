function solution(x, n) {
  const arr = [];

  while (arr.length < n) {
    arr.push(x * (arr.length + 1));
  }

  return arr;
}
