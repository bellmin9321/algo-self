// my solution: ❌ NotSolved -> 37 / 51 solved
var maxSlidingWindow = function (nums, k) {
  const ans = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    const slice = nums.slice(i, i + k);
    ans.push(Math.max(...slice));
  }

  return ans;
};

// my solution2: ❌ NotSolved -> 40 / 51 solved
var maxSlidingWindow = function (nums, k) {
  const queue = nums.slice(0, k);
  const ans = [Math.max(...queue)];

  for (let i = k; i < nums.length; i++) {
    queue.shift();
    queue.push(nums[i]);
    ans.push(Math.max(...queue));
  }

  return ans;
};

// best
var maxSlidingWindow = function (nums, k) {
  const q = []; // stores *indices*
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    // remove first element if it's outside the window
    if (q[0] === i - k) {
      q.shift();
    }
    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }

  return res;
};

// 2nd
const maxSlidingWindow = (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    // When i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k;

    if (j >= 0) {
      res.push(q[0]);
      if (nums[j] === q[0]) q.shift(); // If the biggest element in q is about to exit window, remove it from q
    }
  }

  return res;
};
