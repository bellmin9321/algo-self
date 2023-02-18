// my solution
var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const slice = result.splice(index[i], result.length);
    result[index[i]] = nums[i];
    result = result.concat(slice);
  }

  return result;
};

// best
const createTargetArray = (nums, idx) => {
  let target = [];
  for (const i in nums) target.splice(idx[i], 0, nums[i]);
  return target;
};

// best2
const createTargetArray = (nums, idxArr) => {
  let target = [];
  for (let i = 0; i < idxArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (idxArr[i] <= idxArr[j]) idxArr[j]++;
    }
  }
  for (const i in nums) target[idxArr[i]] = nums[i];
  return target;
};

// best3
const createTargetArray = (nums, idxArr) => {
  let target = [],
    max = -1;
  for (let i = 0; i < idxArr.length; i++) {
    if (idxArr[i] <= max) {
      for (let j = 0; j < i; j++) {
        if (idxArr[i] <= idxArr[j]) idxArr[j]++;
        if (idxArr[j] > max) max = idxArr[j];
      }
    }
    max = Math.max(max, idxArr[i]);
  }
  for (const i in nums) target[idxArr[i]] = nums[i];
  return target;
};
