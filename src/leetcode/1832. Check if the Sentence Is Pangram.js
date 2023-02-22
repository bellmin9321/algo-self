// my solution1
var checkIfPangram = function (sentence) {
  const hash = {};

  for (let i = 0; i < sentence.length; i++) {
    if (hash[sentence[i]]) {
      hash[sentence[i]]++;
    } else {
      hash[sentence[i]] = 1;
    }
  }

  return Object.keys(hash).length === 26;
};

// my solution2 & best
var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};
