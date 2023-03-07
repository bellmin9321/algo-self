// my solution
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length / 2; i++) {
    ans.push(nums[i] + nums[nums.length - 1 - i]);
  }

  return Math.max(...ans);
};

// my solution2
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = -Infinity;

  for (let i = 0; i < nums.length / 2; i++) {
    const pairSum = nums[i] + nums[nums.length - 1 - i];
    max = max < pairSum ? pairSum : max;
  }

  return max;
};
