// my solution
var deleteGreatestValue = function (grid) {
  let ans = 0;

  const sorted = grid.map(row => row.sort((a, b) => a - b));

  for (let i = 0; i < sorted[0].length; i++) {
    let max = 0;

    for (let j = 0; j < sorted.length; j++) {
      const last = sorted[j].pop();
      if (max < last) max = last;
    }
    i--;
    ans += max;
  }

  return ans;
};

// best
var deleteGreatestValue = function (grid) {
  grid.forEach(row => row.sort((a, b) => a - b));
  let sum = 0;

  while (grid[0].length) {
    let column = [];
    for (let row of grid) column.push(row.pop());
    sum += Math.max(...column);
  }

  return sum;
};
