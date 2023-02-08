// 내 풀이1 : Runtime 61 ms Beats 98.12% Memory 44.2 MB Beats 81.97%
var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }

  return result;
};

// 내 풀이2 : Runtime 91 ms Beats 18.42% Memory 48.4 MB Beats 6.64%
var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result = [...result, nums[i], nums[i + 1]];
  }

  return result;
};

// 내 풀이3 : Runtime 91 ms Beats 18.42% Memory 48.2 MB Beats 6.64%
var shuffle = function (nums, n) {
  const right = nums.splice(n, nums.length);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result = [...result, nums[i], right[i]];
  }

  return result;
};
