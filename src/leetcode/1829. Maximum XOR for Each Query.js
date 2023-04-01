// my solution
var getMaximumXor = function (nums, maximumBit) {
  const x = 2 ** maximumBit - 1;
  const ans = [];

  while (nums.length) {
    let k = nums.reduce((a, b) => a ^ b, ~x);
    ans.push(~k);
    nums.pop();
  }

  return ans;
};

// best
var getMaximumXor = function (nums, maximumBit) {
  let xor = (1 << maximumBit) - 1;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    nums[i] = xor;
  }
  return nums.reverse();
};

// 2ND
var getMaximumXor = function (nums, maximumBit) {
  let xorArr = [];
  let i;
  let res = [];
  xorArr.push(nums[0]);
  xorArr.push(nums[0] ^ nums[1]);

  for (i = 2; i < nums.length; i++) {
    xorArr.push(xorArr[i - 1] ^ nums[i]);
  }

  let maxBit = Math.pow(2, maximumBit);
  let max = maxBit - 1;
  let tempMax;

  for (i = nums.length - 1; i >= 0; i--) {
    tempMax = xorArr[i] ^ max;
    res.push(tempMax);
  }
  return res;
};
