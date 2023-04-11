// my solution
var countNegatives = function (grid) {
  let ans = 0;

  grid.forEach(row => {
    row.forEach(v => (ans += v < 0 ? 1 : 0));
  });

  return ans;
};

// best
var countNegatives = function (grid) {
  return grid.flat().filter(ele => ele < 0).length;
  // Time Complexity: O(m*n)
  // Space Complexity: O(n)
};

// 2nd
const countNegatives = grid =>
  grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);

// 3rd: BST
var countNegatives = function (grid) {
  let count = 0;
  for (const row of grid) {
    const index = searchFirstNegativeIndex(row);
    count += row.length - index;
  }
  return count;
};

function searchFirstNegativeIndex(arr, target) {
  let r = arr.length - 1;
  let l = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < 0) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
