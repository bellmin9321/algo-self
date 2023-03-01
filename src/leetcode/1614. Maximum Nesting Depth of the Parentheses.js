// my solution
var maxDepth = function (s) {
  const stack = [];
  let depth = 0;

  for (v of s) {
    if (v === '(') {
      depth++;
    } else if (v === ')') {
      stack.push(depth);
      depth--;
    }
  }

  return stack.length === 0 ? 0 : Math.max(...stack);
};

// best
var maxDepth = function (s) {
  let maxCount = 0,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      maxCount = Math.max(maxCount, ++count);
    } else if (s[i] === ')') {
      count--;
    }
  }
  return maxCount;
};

// 2nd
const maxDepth = s => {
  let l = 0,
    r = 0;
  return s.split('').reduce((depth, c) => {
    if (c === '(') l++;
    if (c === ')') r++;
    return Math.max(l - r, depth);
  }, 0);
};

// 2nd
const maxDepth = s => {
  let str = s.match(/[()]/g, '');
  let balance = 0;

  if (!str) return 0;

  return str.reduce((depth, c) => {
    c === '(' ? balance++ : balance--;
    return Math.max(balance, depth);
  }, 0);
};
