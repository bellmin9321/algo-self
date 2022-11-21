function solution(arr, divisor) {
  const result = arr.filter((value) => !(value % divisor));

  return result.length ? result.sort((a, b) => a - b) : [-1];
}

function solution(arr, divisor) {
  const result = arr.filter((value) => value % divisor === 0);

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
