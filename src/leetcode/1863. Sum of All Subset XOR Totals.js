// my solution: 순열 이용(블로그 참고)
var subsetXORSum = function (nums) {
  let ans = [];

  const dfs = (nums, num, arr = []) => {
    ans.push([...arr]);

    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  };

  dfs(nums, 0);

  return ans.reduce(
    (acc, v) => (acc += v.length && v.reduce((a, b) => a ^ b)),
    0,
  );
};

// best
var subsetXORSum = function (nums) {
  const subsets = [[]];
  let sum = 0;

  for (const el of nums) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }

  for (let j = 0; j < subsets.length; j++) {
    if (subsets[j].length === 0) sum = sum + 0;
    else if (subsets[j].length === 1) sum = sum + parseInt(subsets[j]);
    else sum = sum + parseInt(subsets[j].reduce((acc, curr) => acc ^ curr));
  }

  return sum;
};

// 2nd
// 설명 참고 https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/2216715/javascript-to-xor-or-not-to-xor-recursive-path-trailing-in-binary-tree/?orderBy=most_votes&languageTags=javascript
var subsetXORSum = function (nums) {
  let sum = 0;
  dfs(0, 0);
  return sum;

  function dfs(val, i) {
    if (i < nums.length) {
      dfs(val ^ nums[i], i + 1); // to XOR with nums[i].
      dfs(val, i + 1); // NOT to XOR.
    }

    if (i == nums.length) {
      sum += val;
    }
  }
};

// 3rd
var subsetXORSum = function (nums) {
  let output = [];

  function backtrack(start = 0, arr = [nums[0]]) {
    output.push([...arr].reduce((a, b) => a ^ b, 0));
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  backtrack();

  return output.reduce((a, b) => a + b);
};
