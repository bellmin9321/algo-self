// my solution
var cellsInRange = function (s) {
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const result = [];

  for (let i = alphabets.indexOf(s[0]); i <= alphabets.indexOf(s[3]); i++) {
    for (let j = s[1]; j <= s[4]; j++) {
      result.push(alphabets[i] + j);
    }
  }

  return result;
};

// best
const cellsInRange = s => {
  const [fromLetter, fromNum, , toLetter, toNum] = s;
  const ret = [];
  for (
    let l1 = fromLetter.charCodeAt(0), l2 = toLetter.charCodeAt(0);
    l1 <= l2;
    ++l1
  ) {
    for (let n1 = +fromNum, n2 = +toNum; n1 <= n2; ++n1) {
      ret.push(String.fromCharCode(l1) + n1);
    }
  }
  return ret;
};

// 2nd
const toCharCode = char => char.charCodeAt();

var cellsInRange = function (s) {
  const result = [];
  for (let i = toCharCode(s[0]); i <= toCharCode(s[3]); i++) {
    for (let j = s[1]; j <= s[4]; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }
  return result;
};
