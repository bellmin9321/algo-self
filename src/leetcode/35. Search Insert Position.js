// 내 풀이
/*
Runtime 67 ms Beats 61.41% / Memory 42.2 MB Beats 50.5%
*/
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      if (i === nums.length - 1) return i + 1;
      continue;
    } else {
      return i;
    }
  }
};

// O(n) 풀이
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// Runtime 68 ms Beats 56.46% / Memory 41.7 MB Beats 85.68%
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) return i;
    else if (nums[nums.length - 1] < target) return nums.length;
  }
};

// 이분 탐색 풀이 O(logN)
// Runtime 54 ms Beats 96.44% / Memory 42.4 MB Beats 27.23%
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (nums[middle] !== target && left <= right) {
    if (target < nums[middle]) {
      // target이 작으면 right를 줄인다.
      right = middle - 1;
    } else {
      // target이 더크면 left를 늘린다.
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  // 같아서 while문이 끝난거면 middle, 달라서 마지막에 끝난거면 left의 값을 return한다.
  return nums[middle] === target ? middle : left;
};
