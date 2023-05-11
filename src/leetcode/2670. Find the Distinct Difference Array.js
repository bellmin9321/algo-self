// my soltution: ❌ NotSolved
var distinctDifferenceArray = function (nums) {
  return nums.map((v, i) => {
    if (nums[nums.length - 1 - v]) {
      return i + 1 - nums[nums.length - 1 - v];
    }

    return v;
  });
};
