// my solution
var freqAlphabets = function (s) {
  const arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const dic = arr.reduce(
    (obj, b, i) => ((obj[i + 1 + (i >= 9 ? '#' : '')] = b), obj),
    {},
  );
  let ans = '';

  while (s.length) {
    const target = s.slice(0, 3);

    if (target.includes('#')) {
      ans += dic[target].toString();
      s = s.replace(target, '');
      continue;
    }
    ans += dic[s[0]].toString();
    s = s.replace(s[0], '');
  }

  return ans;
};

// best
var freqAlphabets = function (s) {
  return s
    .match(/\d{2}(?=#)|\d/g)
    .map(num => String.fromCharCode(96 + +num))
    .join('');
};

// 2nd
var freqAlphabets = function (s) {
  const CHAR_CODE_OFFSET = 96;
  let solStr = '';

  for (let i = 0; i < s.length; i++) {
    let currNumber = s[i];

    if (s[i + 2] === '#') {
      currNumber = s.slice(i, i + 2);
      i += 2;
    }

    solStr += String.fromCharCode(parseInt(currNumber) + CHAR_CODE_OFFSET);
  }

  return solStr;
};

// 3rd
var freqAlphabets = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') result += getLetter(Number(s[i++] + s[i++]));
    else result += getLetter(Number(s[i]));
  }
  return result;
};

const getLetter = num => {
  return String.fromCharCode(num + 96);
};
