// 2번째 풀이: ⭕️ Solved(60min)
// 주어진 단어에서 발음 가능한 단어가 첫번째 요소(babble.indexOf(word) === 0)로 무조건 와야된다고 생각했고, 해당 발음 가능한 단어가 첫번째 요소로 존재하면 없어질 때까지 계속 소거해서 빈 문자열이 나오면 발음할 수 있는 단어고, 아니면 못하는 단어라고 생각해서 해결
function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];

  return babbling.filter(b => {
    if (words.some(v => b.includes(v + v))) return false;

    while (words.some(v => b.indexOf(v) === 0)) {
      words.forEach(v => {
        if (b.indexOf(v) === 0) b = b.replace(v, '');
      });
    }

    return b === '' ? true : false;
  }).length;
}

// new solution
function solution(babbling) {
  const babbles = ['aya', 'ye', 'woo', 'ma'];

  return babbling.filter(str => {
    for (let d of babbles) {
      if (str.includes(d + d)) return false;
    }

    for (let b of babbles) {
      str = str.replaceAll(b, '@');
    }

    return [...new Set(str)].join('') === '@';
  }).length;
}

// my solution 2
function solution(babbling) {
  const double = ['ayaaya', 'yeye', 'woowoo', 'mama'];
  const cache = ['aya', 'ye', 'woo', 'ma'];

  const map = babbling.map(str => {
    for (let d of double) {
      if (str.includes(d)) {
        str = str.replace(d, 'impossible');
        return str;
      }
    }

    let count = 1;

    while (count) {
      for (let b of cache) {
        if (str.includes(b)) {
          count++;
          str = str.replace(b, '@');
        }
      }

      if (count === 1) break;
      count = 1;
    }

    return [...new Set(str)].join('');
  });

  return map.filter(v => v === '@').length;
}

// best
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0,
  );
}

// 2nd
function solution(babbling) {
  const babblables = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((possible, babbl) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(' ').trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
