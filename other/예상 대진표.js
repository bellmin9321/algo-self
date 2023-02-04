// 1번째 풀이
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

// 2번째 풀이
function solution(n, a, b) {
  var mid = (n + 1) / 2;

  if ((a > mid && b < mid) || (a < mid && b > mid)) {
    return Math.log2(n);
  } else if (a < mid && b < mid) {
    return solution(n / 2, a, b);
  } else {
    return solution(n / 2, a - n / 2, b - n / 2);
  }
}

// 3번째 풀이
function solution(n, a, b) {
  let count = 0;
  while (Math.abs(a - b) != 0) {
    a = ifOddAddOne(a);
    b = ifOddAddOne(b);
    a = a / 2;
    b = b / 2;
    count++;
  }

  return count;
}

const ifOddAddOne = A => {
  return A % 2 === 0 ? A : A + 1;
};

// 4번째 내가 변형해서 푼 풀이
function solution(n, a, b) {
  let count = 0;

  while (Math.abs(a - b) !== 0) {
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
    count++;
  }

  return count;
}
