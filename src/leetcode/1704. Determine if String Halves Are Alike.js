// my solution
var halvesAreAlike = function (s) {
  const vowels = 'aeiou';
  s = s.toLowerCase();

  const halve1 = s.slice(0, s.length / 2);
  const halve2 = s.slice(s.length / 2);

  return (
    [...halve1].filter(v => vowels.includes(v)).length ===
    [...halve2].filter(v => vowels.includes(v)).length
  );
};

// best
const vowels = 'aeiouAEIOU';

var halvesAreAlike = function (S) {
  let mid = S.length / 2,
    ans = 0;
  for (let i = 0, j = mid; i < mid; i++, j++)
    ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j));
  return ans === 0;
};

// 2nd
var halvesAreAlike = function (s) {
  let isVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (isVowel.indexOf(s[i]) !== -1) {
      count++;
    }
  }
  for (let i = s.length / 2; i < s.length; i++) {
    if (isVowel.indexOf(s[i]) !== -1) {
      count--;
    }
  }
  return count === 0;
};
