// my solution
// Runtime 60 ms Beats 80.37% | Memory 42.4 MB Beats 63.80%
var minAddToMakeValid = function (s) {
  const cache = {};

  while (s.includes('()')) {
    s = s.replaceAll('()', '');
  }

  for (const p of s) {
    cache[p] = (cache[p] || 0) + 1;
  }

  const arr = Object.values(cache);
  return arr.length ? arr.reduce((a, b) => a + b) : 0;
};

// solution2 : 시간 효율 향상
// Runtime 51 ms Beats 96.93% | Memory 41.5 MB Beats 98.77%
var minAddToMakeValid = function (s) {
  const cache = {};

  while (s.includes('()')) {
    s = s.replaceAll('()', '');
  }

  if (!s.length) return 0;

  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }

  return Object.values(cache).reduce((a, b) => a + b);
};

// my solution 3
var minAddToMakeValid = function (s) {
  while (s.includes('()')) {
    s = s.replaceAll('()', '');
  }

  return s.length;
};

// best
var minAddToMakeValid = function (S) {
  let open = 0,
    close = 0;

  for (let c of S) {
    if (c === '(') open++;
    else if (!open) close++;
    else open--;
  }

  return open + close;
};

// 2nd
var minAddToMakeValid = function (S) {
  const stack = [];

  for (let s of S) {
    if (s === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(s);
  }

  return stack.length;
};

// 3rd
const minAddToMakeValid = s => {
  let t = s.replace('()', '');

  if (t.length === s.length) return s.length;
  else return minAddToMakeValid(t);
};
