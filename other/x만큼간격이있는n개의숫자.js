function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

function solution(x, n) {
  return nNumbers(x, n);
}

const nNumbers = (x, n) => {
  return Array.from({ length: n }, (v, index) => (index + 1) * x);
};
