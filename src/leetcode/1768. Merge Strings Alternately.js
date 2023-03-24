// my solution
var mergeAlternately = function (word1, word2) {
  const ans = [];
  const arr1 = [...word1],
    arr2 = [...word2];

  while (arr1.length) {
    ans.push(arr1.shift());
    ans.push(arr2.shift());
  }

  return ans.concat(arr2).join('');
};

// best
const mergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? '') + (b[i] ?? '');
  }

  return result;
};

// 2nd
var mergeAlternately = function (word1, word2) {
  let length = Math.max(word1.length, word2.length),
    s = '';
  for (let i = 0; i < length; i++) {
    s += word1[i] || '';
    s += word2[i] || '';
  }
  return s;
};

// 3rd
var mergeAlternately = function (word1, word2) {
  let result = [];
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) result.push(word1[i]);
    if (word2[i]) result.push(word2[i]);
  }

  return result.join('');
};
