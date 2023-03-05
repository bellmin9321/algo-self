// my solution: ❌ NotSolved: 못 푼 문제
function solution(n) {
  let result = 1;

  while (n > 2) {
    let count = 0;
    let divide = 1;

    while (divide < Math.floor(n / 2)) {
      if (n % divide === 0) {
        count++;
      }

      divide++;
    }

    if (count === 1) result++;

    n--;
  }

  return result;
}

// 1위 풀이: 에라토스테네스의 체를 활용한 풀이
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

// 2nd solution: 함수 생성해서 해결
function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
