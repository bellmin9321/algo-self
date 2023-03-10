// my solution
var diagonalSum = function (mat) {
  let ans = 0;

  let _y = 0;
  if (mat.length % 2 === 0) {
    for (y = 0; y < mat.length; y++) {
      ans += mat[y][_y] + mat[y][mat.length - 1 - _y];
      _y++;
    }
  } else {
    for (y = 0; y < mat.length; y++) {
      if (y !== Math.floor(mat.length / 2)) {
        ans += mat[y][_y] + mat[y][mat.length - 1 - _y];
      } else {
        ans += mat[y][_y];
      }

      _y++;
    }
  }

  return ans;
};

// my solution 2
var diagonalSum = function (mat) {
  let ans = 0;
  let i = 0;
  const mid = Math.floor(mat.length / 2);

  for (y = 0; y < mat.length; y++) {
    ans += mat[y][i] + mat[y][mat.length - 1 - i];
    i++;
  }

  ans -= mat.length % 2 === 0 ? 0 : mat[mid][mid];

  return ans;
};

// best
const diagonalSum = mat => {
  let sum = 0;
  let j = mat[0].length - 1;

  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) sum += mat[i][j];

    sum += mat[i][i];
  }

  return sum;
};

// 2ND
var diagonalSum = function (mat) {
  let primary = 0,
    secondary = 0;

  // storing the sum of all vaues in both diagonals
  for (let i = 0; i < mat.length; i++) {
    primary += mat[i][i];
    secondary += mat[i][mat.length - i - 1];
  }

  // if its an odd matrix then we subtract the mid item form the total sum. Else we just return the primary and secondary sum;

  if (mat.length === mat[0].length && mat[0].length % 2 !== 0) {
    let centerIdx = Math.floor(mat.length / 2);
    return primary + secondary - mat[centerIdx][centerIdx];
  } else {
    return primary + secondary;
  }
};
