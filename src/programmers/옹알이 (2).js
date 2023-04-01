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
