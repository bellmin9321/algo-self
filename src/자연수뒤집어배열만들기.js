function solution(n) {
  // 첫번째 풀이 방법
  const str = `${n}`;
  const arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(Number(str[i]));
  }

  return arr;
}

// 2번째 풀이 방법
function solution(n) {
  return `${n}`.split('').reverse().map(Number);
}
