// my solution: ❌ NotSolved -> 전혀 감을 못잡음
var countVowelStrings = function (n) {
  const cache = [0, 5, 15];
  if (n === 2) return cache[2];
  if (n === 1) return cache[1];
  let i = 3;
  let sum = cache[i - 1];

  while (3 >= i) {
    let sub = cache[i - 2];
    let temp = cache[i - 1] - sub;

    function foo(sub) {
      sum += temp;
      temp -= sub;

      if (sub > 0) {
        foo(sub - 1);
      }
    }

    foo(sub);

    i++;
  }

  return sum;
};

// best
var countVowelStrings = function (n) {
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;

  while (n-- > 1) {
    a = a + e + i + o + u;
    e = e + i + o + u;
    i = i + o + u;
    o = o + u;
    u = u;
  }
  return a + e + i + o + u;
};

// 2nd
var countVowelStrings = function (n) {
  const res = [];
  const curr = [];
  helper(res, curr, n, ['a', 'e', 'i', 'o', 'u'], 0);

  return res.length;
};

function helper(res, curr, n, arr, startIdx) {
  // base case
  if (n === 0) {
    res.push([...curr]); // here I am creating a new copy of `curr` and adding it into `res`
    return;
  }

  // recursive case
  for (let i = startIdx; i < arr.length; i++) {
    // choose
    curr.push(arr[i]);
    helper(res, curr, n - 1, arr, i); // Here, it's important to pass in "i" as the new "startIdx," so that we make sure "e" does not go before "a," etc.

    // unchoose
    curr.pop();
  }
}

// 2nd 2
var countVowelStrings = function (n) {
  let res = 0;

  helper(n, 0);

  function helper(n, startIdx) {
    // base case
    if (n === 0) {
      res++;
      return;
    }

    // recursive case
    for (let i = startIdx; i < 5; i++) {
      helper(n - 1, i);
    }
  }

  return res;
};

// 3rd
var countVowelStrings = function (n) {
  return (
    5 +
    10 * combination(n - 1, 1) +
    10 * combination(n - 1, 2) +
    5 * combination(n - 1, 3) +
    combination(n - 1, 4)
  );
};

function combination(n, k) {
  if (k === 1) return n;

  return (combination(n - 1, k - 1) * n) / k;
}

// 4th
var countVowelStrings = function (n) {
  const vowels = 'aeiou';

  function backtrack(index = 0, strLength = 0, memo = {}) {
    const key = index + '_' + strLength;

    if (memo[key]) return memo[key];

    if (strLength === n) {
      return 1;
    }

    if (strLength > n) return 0;

    let alls = 0;
    for (let i = index; i < 5; i++) {
      alls += backtrack(i, strLength + 1, memo);
    }

    memo[key] = alls;

    return alls;
  }

  return backtrack();
};

// 5th
var countVowelStrings = function (n) {
  let dp = Array(5).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < 5; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[4];
};

// 6th
var countVowelStrings = function (n) {
  let str = 'aeiou';
  let res = 0;

  function backtrack(i, arr) {
    if (arr.length == n) {
      res++;
      return;
    }

    for (let j = i; j < str.length; j++) {
      arr.push(j);
      backtrack(j, arr);
      arr.pop();
    }
  }

  backtrack(0, []);
  return res;
};
