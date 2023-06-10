// 2nd solution: ⭕️ Solved(10min)  23.05.14
function solution(s) {
  let ans = '';
  const cache = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < cache.length; i++) {
    // 정규식 풀이
    // let reg = new RegExp(`${cache[i]}`, 'g');
    // s = s.replace(reg, i);
    s = s.replaceAll(cache[i], i);
  }

  return +s;
}

// 첫번째 풀이
function solution(s) {
  const sObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  const nums = Object.keys(sObj);

  for (let i = 0; i < 10; i++) {
    if (s.replaceAll(sObj[i], nums[i]) === s) {
      continue;
    } else {
      s = s.replaceAll(sObj[i], nums[i]);
    }
  }

  return Number(s);
}
