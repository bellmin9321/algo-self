// my solution
function solution(X, Y) {
  let ans = '';
  const maxStr = X.length > Y.length ? X : Y;
  const minStr = maxStr === X ? Y : X;
  const cache = {};

  for (const num of minStr) {
    cache[num] ? cache[num]++ : (cache[num] = 1);
  }

  for (const num of maxStr) {
    if (cache[num] > 0) {
      cache[num]--;
      ans += num;
    }
  }

  if (!ans) return '-1';

  const abNum = [...ans].sort((a, b) => b - a).join('');

  return +abNum === 0 ? '0' : abNum;
}

// best
function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(''))]
    .filter(number => {
      return Y.includes(number);
    })
    .sort((a, b) => b - a);

  if (!commonNumbers.length) return '-1';

  if (!Number(commonNumbers[0])) return '0';

  return commonNumbers
    .map(number => {
      const Xcount = X.split('').reduce((count, Xnumber) => {
        if (Xnumber === number) return (count += 1);

        return count;
      }, 0);

      const Ycount = Y.split('').reduce((count, Ynumber) => {
        if (Ynumber === number) return (count += 1);

        return count;
      }, 0);

      return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount);
    })
    .join('');
}

// 2nd
function solution(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
    numObj[char] = (numObj[char] || 0) + 1;
  }

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
    .map(num => +num)
    .sort((a, b) => b - a)
    .join('');
}
