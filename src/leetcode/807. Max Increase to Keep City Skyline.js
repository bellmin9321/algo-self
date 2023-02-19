// my solution: ❌ NotSolved -> 테스트만 통과
// 아래 sum 을 구하는 이중 for문을 forEach(or map)로 변경하면 풀림
var maxIncreaseKeepingSkyline = function (grid) {
  const colHeightest = [];
  let sum = 0;

  for (let i = 0; i < grid.length; i++) {
    let colMax = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (colMax <= grid[j][i]) {
        colMax = grid[j][i];
      }
    }

    colHeightest.push(colMax);
  }

  for (let i = 0; i < grid.length; i++) {
    let rowMax = Math.max(...grid[i]);

    for (let j = 0; j < grid[i].length; j++) {
      // sum += (colHeightest[i] >= rowMax ? rowMax : colHeightest[i]) - grid[i][j];
      sum += Math.min(colHeightest[i], rowMax) - grid[i][j];
    }
  }

  return sum;
};

// 1st solution
var maxIncreaseKeepingSkyline = function (grid) {
  let rowM = {}; //Map for the rows max
  let colsM = {}; //Map for the columns max
  let sum = 0; // Total height we can add

  //findMaxRowsCols will go though each row and col and populate the max of each row
  // and colum in a key: value way.
  //From the example, after this function runs the map looks like:
  //console.log(rowM) => { '0': 8, '1': 7, '2': 9, '3': 3 }
  //console.log(colsM)=> { '0': 9, '1': 4, '2': 8, '3': 7 }
  findMaxRowsCols(grid, rowM, colsM);

  //Now that we have the max of a given row and column, let's see how much we can replace each cell by
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      //The new height should be the MIN of the max of a given row and column (so we dont ruine the skyline;)
      let newH = Math.min(rowM[row], colsM[col]);
      //If the current height is smaller do the replacement and count! (saves us some uneeded work)
      if (grid[row][col] < newH) {
        sum += newH - grid[row][col];
        grid[row][col] = newH;
      }
    }
  }
  return sum;
};

var findMaxRowsCols = function (grid, rowM, colsM) {
  //Find the max of each row
  for (let row = 0; row < grid.length; row++) {
    let max = 0;
    for (let curr = 0; curr < grid[0].length; curr++) {
      if (grid[row][curr] > max) {
        max = grid[row][curr];
      }
      rowM[row] = max;
    }
  }

  //Find the max for each column
  for (let col = 0; col < grid.length; col++) {
    let max = 0;
    for (let curr = 0; curr < grid.length; curr++) {
      if (grid[curr][col] > max) {
        max = grid[curr][col];
      }
      colsM[col] = max;
    }
  }
};

// 2nd solution
var maxIncreaseKeepingSkyline = function (grid) {
  let dupGrid = transposeMatrix(grid);
  let colMax = [];
  let ans = 0;

  dupGrid.forEach(row => {
    colMax.push(Math.max(...row));
  });

  grid.forEach((row, i) => {
    let rowMax = Math.max(...row);
    row.forEach((num, j) => {
      ans += Math.min(rowMax, colMax[j]) - num;
    });
  });

  return ans;
};

function transposeMatrix(grid) {
  let dupGrid = JSON.parse(JSON.stringify(grid));

  grid.forEach((row, i) => {
    row.forEach((num, j) => {
      dupGrid[j][i] = num;
    });
  });

  return dupGrid;
}
