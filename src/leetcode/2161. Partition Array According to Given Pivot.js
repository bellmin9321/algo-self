// my solution
var pivotArray = function (nums, pivot) {
  let ans = [];

  ans.push(...nums.filter(v => v < pivot));
  ans.push(...nums.filter(v => v === pivot));
  ans.push(...nums.filter(v => v > pivot));

  return ans;
};

// best
var pivotArray = function (nums, pivot) {
  let smaller = [];
  let greater = [];
  let equal = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) smaller.push(nums[i]);
    else if (nums[i] > pivot) greater.push(nums[i]);
    else equal.push(nums[i]);
  }
  return smaller.concat(equal, greater);
};
