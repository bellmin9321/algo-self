// my solution & best
var minOperations = function (nums) {
  if (nums.length === 1) return 0;
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      count += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }

  return count;
};

// 2nd
var minOperations = function (nums) {
  var max = 0;
  return nums.reduce((acc, cur) => {
    max = Math.max(cur, ++max);
    return acc + max - cur;
  }, 0);
};
