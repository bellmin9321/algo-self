// 못풀었음 -> 나중에 꼭 풀어보기
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
  if (
    s[s.length - 1] === '(' ||
    s[s.length - 1] === '[' ||
    s[s.length - 1] === '{'
  )
    return false;

  let stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
