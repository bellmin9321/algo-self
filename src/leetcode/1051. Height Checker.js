// my solution
var heightChecker = function (heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  let ans = 0;

  heights.forEach((v, i) => (ans += v !== sorted[i] ? 1 : 0));

  return ans;
};

// best
const heightChecker = heights => {
  const sorted = [...heights].sort((a, b) => a - b);
  return heights.reduce(
    (total, _, index) => (sorted[index] !== heights[index] ? total + 1 : total),
    0,
  );
};

// 2nd
const heightChecker = heights => {
  const origin = [...heights];
  heights.sort((a, b) => a - b);
  let ret = 0;
  for (let i = 0; i < origin.length; ++i) {
    origin[i] !== heights[i] && ++ret;
  }
  return ret;
};

// 3rd
const heightChecker = heights => {
  const count = new Int8Array(101);
  for (let i = 0; i < heights.length; ++i) ++count[heights[i]];
  let ret = (idx = 0);
  for (let i = 0; i < 101; ++i) {
    while (count[i]--) heights[idx++] !== i && ++ret;
  }
  return ret;
};
