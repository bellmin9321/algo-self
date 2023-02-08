// 내 풀이 (못 풀었음)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return [];
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      }
    }
  }

  return nums.length;
};

// 다른 사람 풀이
var removeDuplicates = function (nums) {
  var count = nums.length - 1;
  while (count >= 0) {
    if (count == nums.lastIndexOf(nums[count])) {
      count--;
    } else {
      nums.splice(count, 1);
    }
  }

  return nums.length;
};

var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// Set과 splice를 이용한 풀이
var removeDuplicates = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
};
