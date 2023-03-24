// my solution && best
var areOccurrencesEqual = function (s) {
  const cache = {};

  for (const l of s) {
    cache[l] ? cache[l]++ : (cache[l] = 1);
  }

  return new Set(Object.values(cache)).size === 1;
};

// 2nd
var areOccurrencesEqual = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  let occurance = map.get(s[0]);
  for (const [k, v] of map) {
    if (v === occurance) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
