function collatz(num) {
  let answer = 0;

  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }

  return num === 1 ? answer : -1;
}

function collatz(num, count = 0) {
  return num === 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 === 0 ? num / 2 : num * 3 + 1, ++count);
}
