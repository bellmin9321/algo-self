// my solution
var repeatedNTimes = function (nums) {
  const n = nums.length / 2;
  const map = new Map();

  for (const v of nums) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  for (m of map) {
    if (m[1] === n) return m[0];
  }
};

// best
var repeatedNTimes = function (A) {
  let lookup = new Set();

  for (let n of A) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;
};

// 2nd
var repeatedNTimes = function (A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] in map) {
      return A[i];
    } else {
      map[A[i]] = 0;
    }
  }

  return 0;
};
