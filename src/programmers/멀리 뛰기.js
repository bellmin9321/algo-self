// my solution: ❌ NotSolved
function solution(n) {
  if (n <= 3) return n;

  const cache = [1, 2, 3];
  cache[n] = solution(n - 1) + solution(n - 2);

  return cache[n] % 1234567;
}

// best
function solution(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] % 1234567);
  }

  return dp[n] % 1234567;
}
