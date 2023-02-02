/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. 너무 전체를 생가갛고 풀이를 함 -> 배열의 한 단어만 생각해도 됨.
// 2. 배열 내 모든 문자가 같을 때 대응을 처음에 못했음.
var longestCommonPrefix = function (strs) {
  let common = [];
  let prefix = '';

  const lengthArr = strs.map(v => v.length);
  const longestLength = Math.max(...lengthArr);
  const longestWord = strs.filter(v => v.length === longestLength)[0];

  for (let i = 0; i < longestLength; i++) {
    prefix += longestWord[i];

    if (strs.every(item => item.indexOf(prefix) === 0)) {
      if (!common.length) {
        common.push(prefix);
      } else {
        common[0].length < prefix.length ? (common[0] = prefix) : null;
      }
    }
  }

  if (common.length) {
    return common[0];
  } else {
    return '';
  }
};

// slice를 이용한 풀이
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    // strs[0][i] : f, l, o, w, e, r
    for (s of strs) {
      // s : flower, flow, flight
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }

  return strs[0];
};
