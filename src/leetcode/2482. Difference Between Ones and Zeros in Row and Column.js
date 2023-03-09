// my solution-> ❌ NotSolved: 72/85 통과
var onesMinusZeros = function (grid) {
  const ans = [];

  const reverse = [];

  for (let i = 0; i < grid[0].length; i++) {
    const arr = [];
    for (let j = 0; j < grid.length; j++) {
      arr.push(grid[j][i]);
    }
    reverse.push(arr);
  }

  for (let i = 0; i < grid.length; i++) {
    const arr = [];
    let rSum = grid[i].reduce((acc, v) => (acc += v === 1 ? 1 : -1), 0);

    for (let j = 0; j < grid[0].length; j++) {
      let cSum = reverse[j].reduce((acc, v) => (acc += v === 1 ? 1 : -1), 0);
      arr.push(rSum + cSum);
    }

    ans.push(arr);
  }

  return ans;
};

// best
const onesMinusZeros = grid => {
  let [row1, col1] = [
    new Array(grid.length).fill(0),
    new Array(grid[0].length).fill(0),
  ];
  let [row0, col0] = [
    new Array(grid.length).fill(0),
    new Array(grid[0].length).fill(0),
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        row1[i]++;
        col1[j]++;
      } else {
        row0[i]++;
        col0[j]++;
      }
    }
  }
  return grid.map((row, i) =>
    row.map((_, j) => row1[i] + col1[j] - row0[i] - col0[j]),
  );
};

// 2nd
var onesMinusZeros = function (grid) {
  // get number of 1's for each row and col
  let rowsCount = [],
    colsCount = [];
  for (let i = 0; i < grid.length; i++) {
    let count = 0;
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) count++;
    }
    rowsCount[i] = count;
  }

  for (let j = 0; j < grid[0].length; j++) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j]) count++;
    }
    colsCount[j] = count;
  }

  // if we know number of 1's, then number of 0's will be row/col length - number of 1's
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const onesRow0 = rowsCount[i];
      const zerosRow0 = grid[0].length - onesRow0;
      const onesCol1 = colsCount[j];
      const zerosCol1 = grid.length - onesCol1;
      grid[i][j] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1;
    }
  }
  return grid;
};
