function expressions(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}
