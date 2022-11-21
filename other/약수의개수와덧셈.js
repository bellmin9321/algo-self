function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 개수는 홀수다
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

function solution(left, right) {
  let sum = ((left + right) / 2) * (right - left + 1);
  let l = Math.ceil(Math.sqrt(left));
  while (l ** 2 <= right) sum -= (l++) ** 2 * 2;

  return sum;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}
