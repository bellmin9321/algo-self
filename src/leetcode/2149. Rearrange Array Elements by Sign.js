// my solution & best
var rearrangeArray = function (nums) {
  const ans = [];

  const positive = nums.filter(v => v > 0);
  const negative = nums.filter(v => v < 0);

  for (let i = 0; i < positive.length; i++) {
    ans.push(positive[i], negative[i]);
  }

  return ans;
};
