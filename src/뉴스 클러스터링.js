// my solution: 기본 테스트만 통과
function solution(str1, str2) {
  const STR1 = str1.toUpperCase().replace(/[^A-Z]/g, '');
  const STR2 = str2.toUpperCase().replace(/[^A-Z]/g, '');
  const cache = {};
  let dup = 0;

  for (let i = 0; i < STR1.length - 1; i++) {
    let slice = STR1.slice(i, i + 2);

    if (!cache[slice]) {
      cache[slice] = 1;
    } else {
      cache[slice]++;
    }
  }

  for (let i = 0; i < STR2.length - 1; i++) {
    let slice = STR2.slice(i, i + 2);

    if (!cache[slice]) {
      cache[slice] = 1;
    } else {
      dup++;
    }
  }

  const all = Object.values(cache).length;
  console.log(dup, all);

  return Math.floor((dup / all) * 65536);
}

// my solution2: best 답 보고 변형
function solution(str1, str2) {
  const STR1 = str1.toUpperCase();
  const STR2 = str2.toUpperCase();
  if (STR1 === STR2) return 65536;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < STR1.length - 1; i++) {
    let slice = STR1.slice(i, i + 2);

    if (slice.replace(/[^A-Z]/g, '').length === 2) {
      arr1.push(slice);
    }
  }

  for (let i = 0; i < STR2.length - 1; i++) {
    let slice = STR2.slice(i, i + 2);

    if (slice.replace(/[^A-Z]/g, '').length === 2) {
      arr2.push(slice);
    }
  }
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let inter = 0;

  set.forEach(item => {
    const has1 = arr1.filter(v => v === item).length;
    const has2 = arr2.filter(v => v === item).length;

    union += Math.max(has1, has2);
    inter += Math.min(has1, has2);
  });

  return Math.floor((inter / union) * 65536);
}

// best
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
