// my solution
var targetIndices = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  return sorted.map((v, i) => (v === target ? i : -1)).filter(v => v >= 0);
};

// best
function binarySearch(lists, sorted, low, high, target) {
  if (low > high) return;

  const mid = low + Math.floor((high - low) / 2);

  if (sorted[mid] === target) {
    lists.push(mid);
  }

  binarySearch(lists, sorted, low, mid - 1, target);
  binarySearch(lists, sorted, mid + 1, high, target);
}

var targetIndices = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  if (!nums.includes(target)) return [];

  binarySearch(result, nums, 0, nums.length - 1, target);
  return result.sort((a, b) => a - b);
};

// 2nd
var targetIndices = function (nums, target) {
  let lownums = (repeat = 0);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      lownums++;
    }
    if (nums[i] == target) {
      repeat++;
    }
  }
  let arr = [];

  if (repeat < 1) {
    return arr;
  } else {
    for (i = 0; i < repeat; i++) {
      arr.push(lownums + i);
    }
    return arr;
  }
};
