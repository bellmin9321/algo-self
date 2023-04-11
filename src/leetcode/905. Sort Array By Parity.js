// my solution
var sortArrayByParity = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      ans.unshift(nums[i]);
    } else {
      ans.push(nums[i]);
    }
  }

  return ans;
};

// best
var sortArrayByParity = function (A) {
  const temp = [];
  A.forEach(v => {
    v % 2 === 0 ? temp.unshift(v) : temp.push(v);
  });

  return temp;
};

// best2
var sortArrayByParity = function (A) {
  return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};

// 2nd
var sortArrayByParity = function (nums) {
  let oddIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];
      oddIdx++;
    }
  }

  return nums;
};

// 3rd
var sortArrayByParity = function (A) {
  return A.sort(a => (a & 1 ? 1 : -1));
};
