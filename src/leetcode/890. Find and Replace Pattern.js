// my solution -> ❌ NotSolved: time over(2h40m)
var findAndReplacePattern = function (words, pattern) {
  const cache = {};
  let str = '';
  for (const i in pattern) {
    if (cache[pattern[i]]) {
      str += cache[pattern[i]];
    } else {
      str += i;
      cache[pattern[i]] = i;
    }
  }

  const wordsToBinary = words.map(word => {
    let s = '';
    const map = {};

    for (const i in word) {
      if (map[word[i]]) {
        s += map[word[i]];
      } else {
        s += i;
        map[word[i]] = i;
      }
    }

    return s;
  });

  const indexes = wordsToBinary
    .map((binary, i) => (binary === str ? i : -1))
    .filter(v => v !== -1);
  return indexes.map(i => words[i]);
};

// Try1
var findAndReplacePattern = function (words, pattern) {
  const map = {};

  for (const v of pattern) {
    if (map[v]) {
      map[v]++;
    } else {
      map[v] = 1;
    }
  }
  const sortedStr = Object.values(map)
    .sort((a, b) => a - b)
    .join('');

  return words.filter(str => {
    const cache = {};

    for (const v of str) {
      if (cache[v]) {
        cache[v]++;
      } else {
        cache[v] = 1;
      }
    }
    const s = Object.values(cache)
      .sort((a, b) => a - b)
      .join('');
    if (sortedStr === s) return str;
  });
};

// Try2
var findAndReplacePattern = function (words, pattern) {
  const map = {};

  for (const v of pattern) {
    if (map[v]) {
      map[v]++;
    } else {
      map[v] = 1;
    }
  }
  const entryMap = Object.entries(map);

  return words.filter(word => {
    const cache = {};

    for (const v of word) {
      cache[v] ? cache[v]++ : (cache[v] = 1);
    }

    const entryCache = Object.entries(cache);
    for (let [k, v] of entryMap) {
      const filtered = entryCache.filter(([key, value]) => v === value);
      // const temp = filtered.length === 1 ? filtered[0][0]
      word = word.replaceAll(filtered.length === 1 ? filtered[0][0] : '', k);
    }
    // console.log(word)

    if (word === pattern) return word;
  });
};

// Try3: 29/49
var findAndReplacePattern = function (words, pattern) {
  const uniquePattern = [...new Set(pattern)].join('');
  let temp = [...words];

  for (let i in uniquePattern) {
    temp = temp.map(word => word.replaceAll(word[i], pattern[i]));
  }
  console.log(temp);
  temp = temp.map((word, i) => (word === pattern ? i : -1)).filter(v => v >= 0);
  return temp.map(v => words[v]);
};

// Try4: 36/49
var findAndReplacePattern = function (words, pattern) {
  let temp = '';

  for (let i = 1; i < pattern.length; i++) {
    temp += pattern[i - 1] === pattern[i] ? '1' : '0';
  }

  let binary = words.map(word => {
    let str = '';
    for (let i = 1; i < word.length; i++) {
      str += word[i - 1] === word[i] ? '1' : '0';
    }

    return str;
  });

  binary = binary.map((v, i) => (v === temp ? i : -1)).filter(v => v !== -1);
  return binary.map(v => words[v]);
};

// Try5: 45/49
var findAndReplacePattern = function (words, pattern) {
  let temp = [...words];

  for (let i in pattern) {
    pattern = pattern.replaceAll(pattern[i], i);
    temp = temp.map(word => word.replaceAll(word[i], i));
  }
  console.log(pattern, temp);
  temp = temp.map((word, i) => (word === pattern ? i : -1)).filter(v => v >= 0);
  return temp.map(v => words[v]);
};

// best
function findAndReplacePattern(words, pattern) {
  let matches = [];

  for (const word of words) {
    if (word.length !== pattern.length) continue;
    let map = new Map(),
      set = new Set(),
      equals = true;
    for (let i = 0; i < pattern.length; i++) {
      if (map.has(pattern[i])) {
        if (map.get(pattern[i]) !== word[i]) {
          equals = false;
          break;
        }
      } else {
        if (set.has(word[i])) {
          equals = false;
          break;
        }
        map.set(pattern[i], word[i]);
        set.add(word[i]);
      }
    }
    if (equals) matches.push(word);
  }

  return matches;
}

// 2nd
var findAndReplacePattern = function (words, pattern) {
  var patt = patternarr(pattern); // 010
  return words.filter(e => patternarr(e) == patt);
};

const patternarr = function (str) {
  var result = '';

  for (let i = 0; i < str.length; i++) {
    //finding the first index
    result += str.indexOf(str[i]);
  }
  return result;
};
