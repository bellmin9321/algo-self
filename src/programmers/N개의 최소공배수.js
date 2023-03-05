function solution(arr) {
  const highest = Math.max(...arr);
  let result = highest;

  while (true) {
    if (arr.every(num => result % num === 0)) {
      return result;
    }

    result += highest;
  }
}
