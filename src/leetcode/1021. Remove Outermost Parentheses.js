// my solution -> ❌ NotSolved: Time over
var removeOuterParentheses = function (s) {
  const ans = [];
  let count = 0;
  let i = 0;

  while (s.length) {
    s[i] === '(' ? count++ : count--;

    if (count === 0) {
      ans.push(s.slice(0, i + 1));
      s = s.slice(i + 1);
      i = 0;
      continue;
    }

    i++;
  }

  return ans.reduce((a, b) => (a += b.slice(1, -1)), '');
};

// best
var removeOuterParentheses = function (S) {
  let parenthesCount = 0;
  let result = '';

  for (const letter of S) {
    if (letter === '(') {
      if (parenthesCount) {
        result += letter;
      }
      parenthesCount++;
    } else {
      parenthesCount--;
      if (parenthesCount) {
        result += letter;
      }
    }
  }

  return result;
};

// 2nd
var removeOuterParentheses = function (S) {
  let result = '';
  let level = 0;

  for (const item of S) {
    if (item === ')') {
      level--;
    }
    if (level >= 1) {
      result += item;
    }
    if (item === '(') {
      level++;
    }
  }

  return result;
};

// 3rd
var removeOuterParentheses = function (S) {
  let counter = 0;
  let result = '';

  for (let i = 0; i < S.length; i++) {
    if (
      (S[i] === '(' && ++counter !== 1) ||
      (S[i] === ')' && --counter !== 0)
    ) {
      result += S[i];
    }
  }

  return result;
};
