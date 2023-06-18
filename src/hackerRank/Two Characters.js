// my solution: ❌ NotSolved(1h10m, 23/32 passed)

function alternate(s) {
  const set = [...new Set(s)].sort();
  const choices = [];
  let max = 0;

  function createStr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let S = s.replaceAll(arr[i], '').replaceAll(arr[j], '');
        choices.push(S);
      }
    }
  }

  createStr(set);

  for (let i = 0; i < choices.length; i++) {
    if (isValid(choices[i])) {
      max = choices[i].length > max ? choices[i].length : max;
    }
  }

  return max;
}

function isValid(s) {
  for (let j = 1; j < s.length; j++) {
    if (s[j - 1] === s[j]) return false;
  }

  return true;
}

// best
function alternate(s) {
  let maxlen = 0;
  const combinations = [];
  [...new Set(s)].forEach((v, i, a) => {
    a.slice(i + 1).forEach(v1 => {
      combinations.push([v, v1]);
    });
  });
  combinations.forEach(comb => {
    let t = [...s].filter(v => comb.includes(v)).join('');
    if (t.match(/(.)\1/) === null) {
      maxlen = Math.max(maxlen, t.length);
    }
  });
  return maxlen;
}
