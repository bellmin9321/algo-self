// my solution
var oddCells = function (m, n, indices) {
  const matrix = Array.from(Array(m), v => Array(n).fill(0));

  for (let i = 0; i < indices[0].length; i++) {
    for (let j = 0; j < indices.length; j++) {
      if (i === 0) {
        matrix[indices[j][i]] = matrix[indices[j][i]].map(v => v + 1);
      } else {
        for (let k = 0; k < matrix.length; k++) {
          matrix[k][indices[j][i]] += 1;
        }
      }
    }
  }
  return matrix.flat().filter(v => v % 2 !== 0).length;
};

// best
const oddCells = (row, column, indices) => {
  const matrix = [];
  let ret = 0;

  for (let i = 0; i < row; ++i) matrix[i] = new Uint8Array(column);

  for (let i = 0; i < indices.length; ++i) {
    const [r, c] = indices[i];
    for (let j = 0; j < column; ++j) ++matrix[r][j];
    for (let j = 0; j < row; ++j) ++matrix[j][c];
  }

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      if (matrix[i][j] % 2 === 1) ++ret;
    }
  }

  return ret;
};

// best2
const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let ret = 0;

  for (let i = 0; i < indices.length; ++i) {
    ++rowCount[indices[i][0]];
    ++columnCount[indices[i][1]];
  }

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      ((rowCount[i] ^ columnCount[j]) & 1) === 1 && ++ret; // & 1 is to get the last bit
    }
  }

  return ret;
};

// best3
const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let oddRow = 0;
  let oddColumn = 0;

  for (let i = 0; i < indices.length; ++i) {
    (++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
    (++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
  }

  return oddRow * column + oddColumn * row - 2 * oddRow * oddColumn; // for detail explanation, please see. the comment
};

// 2nd
var oddCells = function (n, m, indices) {
  const nn = Array(n).fill(false);
  const mm = Array(m).fill(false);
  indices.forEach(([x, y]) => {
    nn[x] = !nn[x];
    mm[y] = !mm[y];
  });
  const numR = nn.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
  const numC = mm.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);
  return numR * m + numC * n - 2 * numR * numC;
};
