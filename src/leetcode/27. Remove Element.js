var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (val == nums[i]) {
      nums.splice(i, 1);
      i = -1;
    }
  }
  return nums.length;
};
