// my solution: ❌ NotSolved -> 힌트 봄
function solution(numbers) {
  if (Math.max(...numbers) === 0) return '0';

  numbers.sort((a, b) => {
    const strA = String(a);
    const strB = String(b);
    // console.log(+(strA + strB) > +(strB + strA))
    if (+(strA + strB) > +(strB + strA)) return -1;
    else if (+(strA + strB) < +(strB + strA)) return 1;
    else if (+(strA + strB) === +(strB + strA)) return 0;
  });

  return numbers.join('');
}
// my solution: ❌ NotSolved -> 기본 테스트만 통과
function solution(numbers) {
  const dfs = (arr, length) => {
    const ans = [];

    if (length === numbers.length - 1) return arr.map(v => [v]);

    arr.forEach((fixed, i, origin) => {
      const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
      const permutations = dfs(rest, length + 1);
      const attached = permutations.map(permutation => [fixed, ...permutation]);
      ans.push(...attached);
    });

    return ans.map(v => v.join(''));
  };

  const result = dfs(numbers, 0);
  return Math.max(...result.map(v => +v)) + '';
}

// best
function solution(numbers) {
  var answer = numbers
    .map(v => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

// 2nd
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}
