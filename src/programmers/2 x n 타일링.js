// my solution & best : ❌ NotSolved -> 힌트 봄
function solution(n) {
  // n = 가로 길이
  const cache = [0, 1, 2, 3];

  for (let i = 4; n >= i; i++) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % 1000000007;
  }

  return cache[n];
}

// 2nd
function tiling(n) {
  return n < 3 ? n : (tiling(n - 1) + tiling(n - 2)) % 100000;
}
