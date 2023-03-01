// my solution: ❌ NotSolved -> 3시간 초과 -> O(n^3)
var diagonalSort = function (mat) {
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length - 1; c++) {
      //  첫번째 줄 마지막 열 요소 또는 마지막 줄 첫번째 열 요소는 비교 대상이 없으므로 continue
      if (r === 0 && c === mat[r].length - 1 && r === mat.length - 1 && c === 0)
        continue;
      const temp = [];
      let i = 0;

      while (r + i < mat.length && c + i < mat[r].length)
        temp.push(mat[r + i][c + i++]);
      const sorted = temp.sort((a, b) => a - b);

      for (let j = 0; j < sorted.length; j++) {
        mat[r + j][c + j] = sorted[j];
      }
    }
  }

  return mat;
};

// best: Runtime 108 ms Beats 23.3% | Memory 45.5 MB Beats 32.24% -> O(n^2)
var diagonalSort = function (M) {
  let y = M.length,
    x = M[0].length - 1;

  for (let i = 2 - y; i < x; i++) {
    // Start far enough to the left to get
    let diag = new Array(y),
      k = 0; // all non-singleton diagonals

    for (let j = 0; j < y; j++) if (M[j][i + j]) diag[k++] = M[j][i + j]; // Only store valid cell values in the array
    diag.sort((a, b) => a - b), (k = 0); // Sort the diagonal and reset its index

    for (let j = 0; j < y; j++) if (M[j][i + j]) M[j][i + j] = diag[k++]; // Replace the diagonal cells in sorted order
  }

  return M;
};

// 2nd Runtime 91 ms Beats 47.37% | Memory 46.4 MB Beats 11.84%
var diagonalSort = function (mat) {
  let map = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j;
      if (!map[d]) {
        map[d] = [];
      }
      map[d].push(mat[i][j]);
    }
  }

  for (let key in map) {
    map[key].sort((a, b) => {
      return a - b;
    });
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j;
      mat[i][j] = map[d].shift();
    }
  }

  return mat;
};
