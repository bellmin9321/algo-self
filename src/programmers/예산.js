// my solution: ⭕️ Solved
function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let ans = 0;
  let sum = 0;

  for (const b of sorted) {
    sum += b;

    if (sum > budget) {
      return ans;
    }

    ans++;
  }

  return ans;
}

// best
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

// 2nd
function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map(v => (budget -= v))
      .findIndex(v => v < 0) || ~d.length
  );
}

// 3rd
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
