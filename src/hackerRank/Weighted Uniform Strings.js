// my solution: ⭕️ Solved(30min)
function weightedUniformStrings(s, queries) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const cache = {};
  [...alphabets].forEach((v, i) => (cache[v] = i + 1));
  const ans = [cache[s[0]]];
  let now = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (now === s[i]) {
      count++;
      ans.push(cache[now] * count);
      now = s[i];
      continue;
    }

    count = 1;
    now = s[i];
    ans.push(cache[s[i]]);
  }

  return queries.map(query => {
    return ans.includes(query) ? 'Yes' : 'No';
  });
}

// best
function weightedUniformStrings(s, queries) {
  let code;
  let prevChar;
  let prevCharCount;
  let dic = Object.create(null);

  for (let i = 0; i < s.length; i++) {
    code = s.charCodeAt(i) - 96;
    if (prevChar === code) {
      prevCharCount++;
    } else {
      prevCharCount = 1;
      prevChar = code;
    }

    dic[code * prevCharCount] = true;
  }

  const result = [];

  for (let i = 0; i < queries.length; i++) {
    result.push(dic[queries[i]] ? 'Yes' : 'No');
  }

  return result;
}

// 2nd
function weightedUniformStrings(s, queries) {
  // Write your code here
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let charsArray = s.split('');
  let data = {};

  for (let i = 0; i < charsArray.length; i++) {
    let weight = alphabet.indexOf(charsArray[i]) + 1;
    data[charsArray[i]] = { weight: weight, repeated: 0 };
  }

  for (let i = 0; i < charsArray.length; i++) {
    data[charsArray[i]].repeated += 1;
  }

  const result = [];
  const helperArray = [];
  let tempCounter = 0;

  for (let i = 0; i < charsArray.length; i++) {
    let chars = charsArray[i];
    tempCounter += data[chars].weight;
    helperArray.push(tempCounter);

    if (chars !== charsArray[i + 1]) {
      tempCounter = 0;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    if (helperArray.includes(queries[i])) {
      result.push('Yes');
    } else {
      result.push('No');
    }
  }

  return result;
}

// 3rd
function weightedUniformStrings(s, queries) {
  const charbase = 'a'.charCodeAt() - 1;
  const subs = s.match(/(.)+?(?!\1)/g) || [];
  let scores = new Set();

  subs.forEach(v => {
    let charval = v.charCodeAt(0) - charbase;
    [...v].forEach((v, i) => scores.add((i + 1) * charval));
  });

  return queries.map(v => (scores.has(v) ? 'Yes' : 'No'));
}
