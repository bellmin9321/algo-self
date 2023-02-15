// my solution
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    let [freq, val] = [...nums].slice(i, i + 2);
    result = [...result, ...Array(freq).fill(val)];
  }

  return result;
};

// my solution2
var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length - 1; i += 2) {
    let [freq, val] = [...nums].slice(i, i + 2);
    result.push(...Array(freq).fill(val));
  }

  return result;
};

// best
var decompressRLElist = function (nums) {
  return nums.reduce(
    (acc, cur, i, arr) =>
      i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
    [],
  );
};

// 2nd
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return result;
};
