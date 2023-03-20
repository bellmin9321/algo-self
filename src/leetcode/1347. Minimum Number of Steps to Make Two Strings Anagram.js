// my solution & best
var minSteps = function (s, t) {
  const cache = {};

  for (let i in s) {
    if (cache[s[i]]) {
      cache[s[i]]++;
    } else {
      cache[s[i]] = 1;
    }
  }

  for (let i in t) {
    if (cache[t[i]]) {
      cache[t[i]]--;
    }
  }

  return Object.values(cache).reduce((a, b) => a + b);
};

// my solution2
var minSteps = function (s, t) {
  const cache = {};

  for (let i in s) {
    if (cache[s[i]]) {
      cache[s[i]]++;
    } else {
      cache[s[i]] = 1;
    }
  }

  let ans = 0;

  for (let i in t) {
    if (cache[t[i]]) cache[t[i]]--;
    else ans++;
  }

  return ans;
};
