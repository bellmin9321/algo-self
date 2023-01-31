// 내 풀이 154ms / 47.5MBV
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;

  if (s.includes('IV')) {
    sum += romanNums['IV'];
    s = s.replace('IV', '');
  }

  if (s.includes('IX')) {
    sum += romanNums['IX'];
    s = s.replace('IX', '');
  }

  if (s.includes('XL')) {
    sum += romanNums['XL'];
    s = s.replace('XL', '');
  }

  if (s.includes('XC')) {
    sum += romanNums['XC'];
    s = s.replace('XC', '');
  }

  if (s.includes('CD')) {
    sum += romanNums['CD'];
    s = s.replace('CD', '');
  }

  if (s.includes('CM')) {
    sum += romanNums['CM'];
    s = s.replace('CM', '');
  }

  for (let i = 0; i < s.length; i++) {
    sum += romanNums[s[i]];
  }

  return sum;
};

// other 177ms / 46.9MB
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const now = romanNums[s[i]];
    const next = romanNums[s[i + 1]];

    if (now < next) {
      sum += next - now;
      i++;
    } else {
      sum += now;
    }
  }

  return sum;
};

// ❗ Runtime이 가장 빨랐던 답변과 비교
// 203ms / 49.6MB
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = new Map();
  symbols.set('I', 1);
  symbols.set('V', 5);
  symbols.set('X', 10);
  symbols.set('L', 50);
  symbols.set('C', 100);
  symbols.set('D', 500);
  symbols.set('M', 1000);
  const numerals = s.split('');
  let prev = symbols.get(numerals[0]);
  let sum = 0;
  for (let i = 0; i < numerals.length; i++) {
    const curr = symbols.get(numerals[i]);

    if (curr > prev) {
      const subtractedValue = curr - prev;
      sum -= prev;
      sum += subtractedValue;
    } else {
      sum += curr;
    }
    prev = curr;
  }
  return sum;
};

// ❗ Memory 사용이 가장 적었던 답변과 비교
// 258ms / 47MB
var romanToInt = function (string) {
  const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let acc = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (nums[string[i]] < nums[string[i + 1]]) {
      acc -= nums[string[i]];
    } else {
      acc += nums[string[i]];
    }
  }
  return acc;
};
