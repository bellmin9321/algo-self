// my solution
var vowelStrings = function(words, left, right) {
  const vowel = 'aeiou';

  return words.slice(left, right + 1).filter(word => {
    return vowel.includes(word[0]) && vowel.includes(word[word.length - 1]);
  }).length;
};