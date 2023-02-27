// my solution 1
var uniqueMorseRepresentations = function (words) {
  const morses = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const cache = {};

  words.map(word => {
    let morse = '';
    [...word].map(v => {
      const index = v.charCodeAt();
      morse += morses[index - 97];
    });

    if (cache[morse]) {
      cache[morse]++;
    } else {
      cache[morse] = 1;
    }
  });

  return Object.values(cache).length;
};

// my solution2
var uniqueMorseRepresentations = function (words) {
  const morses = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const set = new Set();

  words.map(word => {
    let morse = '';
    [...word].map(v => {
      const index = v.charCodeAt();
      morse += morses[index - 97];
    });

    set.add(morse);
  });

  return set.size;
};
