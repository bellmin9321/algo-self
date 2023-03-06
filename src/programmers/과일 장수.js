// my solution
function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let ans = 0;

  for (let i = 0; i < score.length; i += m) {
    const slice = score.slice(i, i + m);

    if (slice.length === m) {
      ans += slice[slice.length - 1] * m;
    }
  }

  return ans;
}

// best
solution = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;

// 2nd
function solution(k, m, score) {
  let answer = 0;

  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
