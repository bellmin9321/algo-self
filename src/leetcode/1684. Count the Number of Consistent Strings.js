// my solution
var countConsistentStrings = function (allowed, words) {
  for (v of allowed) {
    words = words.map(word => word.replaceAll(v, ''));
  }

  return words.filter(v => v === '').length;
};

// best
const countConsistentStrings = (allowed, words) => {
  let set = new Set(allowed);
  return words.reduce((a, w) => {
    return w.split('').every(l => set.has(l)) ? ++a : a;
  }, 0);
};

// 2nd
var countConsistentStrings = function (allowed, words) {
  const re = new RegExp(`^[${allowed}]+$`);
  let count = 0;

  words.forEach(word => {
    if (word.match(re)) count++;
  });

  return count;
};

// 3rd
const countConsistentStrings = (allowed, words) =>
  words.filter(word => [...word].every(letter => allowed.includes(letter)))
    .length;

//
const countConsistentStrings = (allowed, words) => {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (!allowed.includes(char)) break;
      else if (j === word.length - 1) result.push(word);
    }
  }

  return result.length;
};

//
const countConsistentStrings = (allowed, words) => {
  let count = 0;

  words.forEach(word => {
    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (!allowed.includes(char)) break;
      else if (j === word.length - 1) count++;
    }
  });

  return count;
};
