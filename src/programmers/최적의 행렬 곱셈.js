// my solution
function solution(matrix_sizes) {
  let ans = [];

  for (let i = 0; i < matrix_sizes.length; i++) {
    const copy = [...matrix_sizes];
    let sum = 0;

    while (copy.length > 1) {
      const [v, t] = copy[i];
      const targetIdx = copy.findIndex(v => v[0] === t);
      if (targetIdx < 0) {
        i--;
      }
      sum += v * t * copy[targetIdx][1];
      copy[i][1] = copy[targetIdx][1];
      copy.splice(targetIdx, 1);
    }
    if (sum === 0) continue;
    ans.push(sum);
  }

  return Math.min(...ans);
}

// best: dp를 이용한 풀이
function solution(matrix_sizes) {
  const n = matrix_sizes.length;
  const dp = new Array(n).fill().map(_ => new Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }

  for (let i = 1; i < n; i++) {
    for (let start = 0; start < n; start++) {
      const end = start + i;

      if (end >= n) break;

      for (let fixed = start; fixed < end; fixed++) {
        dp[start][end] = Math.min(
          dp[start][end],
          dp[start][fixed] +
            dp[fixed + 1][end] +
            matrix_sizes[start][0] *
              matrix_sizes[fixed + 1][0] *
              matrix_sizes[end][1],
        );
      }
    }
  }

  return dp[0][n - 1];
}
