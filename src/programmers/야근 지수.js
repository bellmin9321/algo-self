// my solution: 2시간 동안 품
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
