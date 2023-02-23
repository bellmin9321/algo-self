// my solution
var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          Math.abs(nums[i] - nums[j]) === diff &&
          Math.abs(nums[j] - nums[k]) === diff
        )
          count++;
      }
    }
  }

  return count;
};

// best
var arithmeticTriplets = function (nums, diff) {
  let hash = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i] - diff;

    if (hash.has(temp) && hash.has(temp - diff)) {
      count++;
    }
    hash.set(nums[i], 'Hard choices easy life, Easy choices hard life.');
  }

  return count;
};

// 2nd
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  //The third triplet element
  let diff2 = 2 * diff;
  for (let i = 0; i < nums.length; i++) {
    /**
     * Checking if there is second and third triplet elements in array
     * Starting from the next element in array for the second
     * And from the +2 for the third to optimize search
     * && excludes second check if first failed
     */
    if (
      nums.includes(nums[i] + diff, i + 1) &&
      nums.includes(nums[i] + diff2, i + 2)
    ) {
      count++;
    }
  }
  return count;
};
