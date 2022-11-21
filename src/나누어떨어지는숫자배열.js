function solution(arr, divisor) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  if (!result.length) return [-1];

  return result.sort((a, b) => a - b);
}
