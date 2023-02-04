/** 내 풀이: 308 / 312 passed -> Time Limit Exceeded

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum === 0) {
          const target = [nums[i], nums[j], nums[k]];

          if (result.indexOf(target) < 0) {
            result = [...result, target];
          }
        }
      }
    }
  }

  return result.length
    ? [...new Set(result.join('|').split('|'))]
        .map(v => v.split(','))
        .map(v => v.map(a => +a))
    : [];
};

// O(n^2) 풀이
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // prevent duplicates
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    // find sum with 2-pointer method
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // shift pointer to a new value to prevent duplicates
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};
