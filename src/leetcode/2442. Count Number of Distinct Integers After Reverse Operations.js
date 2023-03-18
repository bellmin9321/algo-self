// my solution
var countDistinctIntegers = function (nums) {
  const reversedNums = nums.map(num => +[...(num + '')].reverse().join(''));
  return new Set(nums.concat(reversedNums)).size;
};
