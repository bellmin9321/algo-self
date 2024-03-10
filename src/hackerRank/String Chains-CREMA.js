/*
4. String Chains
Given an array of words representing a
dictionary, test each word to see if it can be
made into another word in the dictionary when
characters are removed one at a time. Each
word represents its own first element of its
string chain, so start with a string chain length
of 1. Each time a character is removed,
increment the string chain by 7. In order to
remove a character, the resulting word must be
in the original dictionary. Determine the
longest string chain achievable for a given
dictionary.
Example
n = 4
words = ['a', 'and', 'an', 'bear']
The word 'and could be reduced to 'an' and
then to 'a'. The single character a cannot be
reduced any further because there is not a null
string in the dictionary. The word 'bear cannot
be reduced at all. The longest string chain has a
length of 3.
Function Description
Complete the function longest Chain in the
editor below.
longestChain has the following parameter(s):
int n: length of words
str words[n]: dictionary of strings to test
Returns
int: the length of the longest string chain
*/
function longestChain(words) {
  words.sort((a, b) => a.length - b.length);

  let ans = 1;
  const cache = {};

  for (const word of words) {
    cache[word] = 1;
  }

  for (const word of words) {
    let length = 1;

    for (let i = 0; i < word.length; i++) {
      const reducedWord = word.slice(0, i) + word.slice(i + 1);
      length = Math.max(length, (cache[reducedWord] || 0) + 1);
    }

    cache[word] = length;
    ans = Math.max(ans, length);
  }

  return ans;
}
