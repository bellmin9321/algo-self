// 2번째 풀이: ❌ NotSolved(30/32 통과) -> 2시간 품  23.05.14
function solution(dartResult) {
  let ans = [0];
  let temp = dartResult[0];

  for (let i = 1; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i]) && i > 1) {
      ans.push(helper(temp));

      if (!isNaN(dartResult[i + 1])) {
        temp = '10';
        i++;
      } else {
        temp = dartResult[i];
      }
    } else {
      temp += dartResult[i];
    }
  }

  function helper(s) {
    let str = '';
    let num = '';
    [...s].forEach(v => (isNaN(v) ? (str += v) : (num += v)));

    if (str[0] === 'S') num *= 1;
    else if (str[0] === 'D') num **= 2;
    else if (str[0] === 'T') num **= 3;

    if (str[1] === '*')
      return (ans[ans.length - 1] + num) * 2 - ans[ans.length - 1];
    else if (str[1] === '#') num *= -1;

    return num;
  }

  ans.push(helper(temp));
  return ans.reduce((a, b) => a + b);
}

// my solution -> ❌ NotSolved: 시간초과(2시간)
function solution(dartResult) {
  let ans = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] + dartResult[i + 1] === '10') {
      num === 0 ? null : ans.push(num);
      num = '10';
      i++;
      continue;
    }

    if (!isNaN(dartResult[i])) {
      // 숫자일 경우
      num === 0 ? null : ans.push(num);
      num = dartResult[i];
      continue;
    }

    if (dartResult[i] === 'S') {
      num **= 1;
    } else if (dartResult[i] === 'D') {
      num **= 2;
    } else if (dartResult[i] === 'T') {
      num **= 3;
    } else if (dartResult[i] === '*') {
      ans.push(num);
      num = 0;
      ans = ans.map((v, j) => (j >= ans.length - 2 ? v * 2 : v));
    } else if (dartResult[i] === '#') {
      num *= -1;
    }

    if (i === dartResult.length - 1) ans.push(num);
  }

  return ans.reduce((a, b) => a + b);
}

// best
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// 2nd
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  let darts = dartResult.match(/\\d.?\\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(\\d{1,})([SDT])([*#])?/),
      score = Math.pow(split[1], bonus[split[2]]);

    if (split[3] !== undefined) {
      if (split[3] === '*') {
        score *= 2;

        if (i > 0) darts[i - 1] *= 2;
      } else score *= -1;
    }

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
