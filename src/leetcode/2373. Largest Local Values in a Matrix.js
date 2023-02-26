// my solution: ⭕️ Solved (3시간만에 해결) -> O(n^3) 이상
// Runtime 139 ms Beats 8.57% | Memory 49.1 MB Beats 11.90%
var largestLocal = function (grid) {
  const result = [];

  for (let i = 0; i < grid.length - 2; i++) {
    const threeRow = grid.slice(i, i + 3);
    const temp = [];

    for (let j = 0; j < threeRow.length; j++) {
      for (let k = 0; k < threeRow[j].length - 2; k++) {
        let threeCol = threeRow[j].slice(k, k + 3);
        temp.push(Math.max(...threeCol));
      }
    }

    const cache = {};

    for (let i = 0; i < temp.length; i++) {
      if (cache[i % (grid.length - 2)]) {
        if (cache[i % (grid.length - 2)] < temp[i]) {
          cache[i % (grid.length - 2)] = temp[i];
        }
      } else {
        cache[i % (grid.length - 2)] = temp[i];
      }
    }

    result.push(Object.values(cache));
  }

  return result;
};

// best: Runtime 101 ms Beats 22.86% | Memory 46.8 MB Beats 23.33%
var largestLocal = function (grid, count = 2) {
  let n = grid.length;
  let arr = [];
  for (let i = 0; i < n - 1; i++) arr[i] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = Math.max(
        grid[i][j],
        Math.max(grid[i][j + 1], Math.max(grid[i + 1][j], grid[i + 1][j + 1])),
      );
    }
  }
  return --count == 0 ? arr : largestLocal(arr, count);
};

// 2nd: Runtime 98 ms Beats 28.9% | Memory 45.3 MB Beats 84.29%
var largestLocal = function (grid) {
  const ans = [];

  for (let r = 0; r < grid.length - 2; r++) {
    const row = [];
    for (let c = 0; c < grid[r].length - 2; c++) {
      row.push(
        Math.max(
          grid[r][c],
          grid[r][c + 1],
          grid[r][c + 2],
          grid[r + 1][c],
          grid[r + 1][c + 1],
          grid[r + 1][c + 2],
          grid[r + 2][c],
          grid[r + 2][c + 1],
          grid[r + 2][c + 2],
        ),
      );
    }
    ans.push(row);
  }

  return ans;
};

// 3rd: Runtime 120 ms Beats 13.33% Memory 45.7 MB Beats 52.86%
// https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2862583/javascript-explanation-of-all-cases-easy-to-understand/?orderBy=most_votes&languageTags=javascript
var largestLocal = function (grid) {
  const matrix = new Array(grid.length - 2)
    .fill(0)
    .map(() => new Array(grid[0].length - 2).fill(0));

  for (let i = 0; i < grid[i].length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      matrix[i][j] = Math.max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2],
      );
    }
  }

  return matrix;
};
