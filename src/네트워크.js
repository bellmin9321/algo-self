// my solution
function solution(n, computers) {
  const cache = {};

  for (let i = 0; i < computers.length; i++) {
    const sum = computers[i].reduce((a, b) => a + b);
    if (sum === n) return 1;

    for (let j = 0; j < computers[i].length; j++) {
      if (i !== j) {
        if (cache[j + 1]) {
          cache[j + 1] += computers[i][j];
        } else {
          cache[j + 1] = computers[i][j];
        }
      }
    }
  }

  return Object.values(cache).filter(v => v === 0).length + 1;
}
