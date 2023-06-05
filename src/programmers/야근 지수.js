// 2번째 풀이: ⭕️ Solved(40min) -> 23.05.14
function solution(n, works) {
  if (n > works.reduce((a, b) => a + b)) return 0;

  while (n > 0) {
    const max = Math.max(...works);
    works.forEach((v, i) => {
      if (v === max && max > 0) works[i] -= n-- > 0 ? 1 : 0;
    });
  }

  return works.reduce((a, b) => (a += b ** 2), 0);
}

// my solution: ❌ NotSolved -> 2시간 동안 품
function solution(n, works) {
  if (sum(works) <= n) return 0;

  works.sort((a, b) => b - a);

  for (let i = 1; n > 0; i++) {
    if (works[i - 1] !== works[i]) {
      works[i - 1] -= 1;
      n--;
      i = 0;
      continue;
    }

    works[(i - 1) % works.length] -= 1;
    n--;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

const sum = arr => arr.reduce((a, b) => a + b);

// New best
const noOvertime = (no, works) => {
  while (no > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    no--;
  }
  return works.map(a => a * a).reduce((a, b) => a + b);
};

// best -> 시간 초과 발생
const solution = (n, works) => {
  while (n > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    n--;
  }

  return works.map(a => a * a).reduce((a, b) => a + b);
};

// 2nd
const overtimeIndex = ws => ws.reduce((acc, w) => acc + w * w, 0);

const solution = (n, works) => {
  const dontSlack = (h, w0) => {
    if (!h) return w0;

    const w = w0.sort((a, b) => b - a);

    w[0] = w[0] - 1;

    return dontSlack(h - 1, w);
  };

  return overtimeIndex(dontSlack(n, works));
};
