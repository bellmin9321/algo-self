function solution(n) {
  const result = [0, 1];

  while (result.length !== n + 1) {
    const fibonacci =
      (result[result.length - 2] + result[result.length - 1]) % 1234567;
    result.push(fibonacci);
  }
  return result[n];
}
