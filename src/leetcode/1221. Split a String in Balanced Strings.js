// my solution
var balancedStringSplit = function (s) {
  const arr = [...s];
  const stack = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== stack[stack.length - 1] && stack.length) {
      stack.pop();

      if (!stack.length) count++;
      continue;
    }

    stack.push(arr[i]);
  }

  return count;
};

// best
var balancedStringSplit = function (s) {
  let matches = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      balance -= 1;
    } else if (s[i] === 'L') {
      balance += 1;
    }

    if (balance === 0) {
      matches += 1;
    }
  }

  return matches;
};

// best2
var balancedStringSplit = function (s) {
  let matches = 0;
  const stack = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top !== undefined && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0) {
      matches += 1;
    }
  }

  return matches;
};

// 2nd
var balancedStringSplit = function (s) {
  let count = 1;
  let results = 0;
  for (let i = 1; i < s.length; i++) {
    s[i] == s[0] ? count++ : count--;
    if (count == 0) results++;
  }
  return results;
};

// 3rd
var balancedStringSplit = function (s) {
  let lcount = 0,
    rcount = 0;
  let count = 0;
  s.split('').forEach(val => {
    if (val === 'R') rcount++;
    else if (val === 'L') lcount++;
    if (lcount === rcount) {
      count++;
      lcount = 0;
      rcount = 0;
    }
  });
  return count;
};
