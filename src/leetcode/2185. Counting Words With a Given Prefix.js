// my solution
var prefixCount = function(words, pref) {
  let ans = 0;
    for (const word of words) {
      if (word.indexOf(pref) === 0) ans++;
      // word.indexOf(pref) === 0 && ans++;
    }

    return ans;
};

// best
const prefixCount = (words, pref) => {
  let count = 0;
  for (const word of words) {
    word.startsWith(pref) && ++count;
  }
  return count;
}

// best2
const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;

// 2nd
var prefixCount = function(words, pref) {
  return words.filter(word => word.slice(0, pref.length) === pref).length;
};