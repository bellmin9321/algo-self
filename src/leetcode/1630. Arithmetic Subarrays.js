// my solution
var checkArithmeticSubarrays = function (nums, l, r) {
  const ans = new Array(l.length).fill(true);

  for (let i in l) {
    const slice = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);

    for (let j = 2; j < slice.length; j++) {
      const diff = slice[1] - slice[0];

      if (diff !== slice[j] - slice[j - 1]) {
        ans[i] = false;
        break;
      }
    }
  }

  return ans;
};

// best
const checkArithmeticSubarrays = (nums, l, r) =>
  l.map((start, mapIdx) =>
    nums
      .slice(start, r[mapIdx] + 1)
      .sort((a, b) => a - b)
      .every((n, everyIdx, arr, diff = arr[1] - arr[0]) =>
        everyIdx < 2 ? true : n - arr[everyIdx - 1] === diff,
      ),
  );

// 2nd
function checkArithmeticSubarrays(nums, l, r) {
  return l.map((_, i) => {
    const subarray = nums.slice(l[i], r[i] + 1);

    return isArithmeticSequence(subarray);
  });
}

function isArithmeticSequence(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const step = (max - min) / (nums.length - 1);

  const set = new Set(nums);
  return nums.every((_, i) => set.has(min + i * step));
}

// 3rd

const checkArithmeticSubarrays = (nums, l, r) => {
  const chechArithmetic = arr => {
    const diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++)
      if (arr[i] - arr[i - 1] != diff) return false;
    return true;
  };

  return l.map((_, i) =>
    chechArithmetic(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b)),
  );
};
