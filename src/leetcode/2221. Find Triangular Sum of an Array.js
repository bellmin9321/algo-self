// my solution
var triangularSum = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = (nums[i] + nums[i + 1]) % 10;
  }
  nums.length > 1 ? nums.pop() : null;

  return nums.length === 1 ? nums[0] : triangularSum(nums);
};

// best
var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i + 1 < nums.length; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
  }
  return nums[0];
};
