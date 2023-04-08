// my solution
var numberOfPairs = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      ans[0]++;
      nums.splice(i, 2);
      i = -1;
    } else {
      ans[1]++;
      nums.splice(i, 1);
      i = -1;
    }
  }

  return ans;
};

// best
var numberOfPairs = function (nums) {
  const map = {};
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]];
      pairs++;
    } else {
      map[nums[i]] = 1;
    }
  }

  return [pairs, Object.values(map).length];
};
