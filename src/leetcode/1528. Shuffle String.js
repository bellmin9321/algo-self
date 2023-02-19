// my solution 1
var restoreString = function (s, indices) {
  const cache = {};
  let result = '';

  for (let i = 0; i < s.length; i++) {
    cache[indices[i]] = s[i];
  }

  const sorted = Object.values(cache).sort((a, b) => a - b);

  for (v of sorted) {
    result += v;
  }

  return result;
};

// my solution 2
var restoreString = function (s, indices) {
  const cache = [];

  for (let i = 0; i < s.length; i++) {
    cache[indices[i]] = s[i];
  }

  return cache.join('');
};
