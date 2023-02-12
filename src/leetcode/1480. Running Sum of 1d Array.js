// 내 풀이1 : slice, reduce 이용
var runningSum = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const slice = nums.slice(0, i + 1);
    result.push(slice.reduce((a, b) => a + b));
  }

  return result;
};

// 내 풀이2 : reduce 이용
var runningSum = function (nums) {
  const result = [];
  nums.reduce((acc, cur) => {
    result.push(acc + cur);
    return acc + cur;
  }, 0);

  return result;
};

// 내 풀이3 :
var runningSum = function (nums) {
  const result = [];
  let sum = 0;

  for (value of nums) {
    sum += value;
    result.push(sum);
  }

  return result;
};

// 최다 추천:  Runtime 65 ms Beats 72.82% Memory 42.2 MB Beats 63.52%
var runningSum = function (nums) {
  nums.reduce((a, c, i, arr) => (arr[i] += a));

  return nums;
};
// 간단 풀이: Runtime 65 ms Beats 72.82% Memory 42.6 MB Beats 30.38%
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
