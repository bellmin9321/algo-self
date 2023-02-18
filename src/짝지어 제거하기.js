// my solution: 효율성 테스트 실패 ❌
function solution(s) {
  const arr = [...s];
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] === arr[i]) {
          arr.splice(i - 1, 2);
          i = 0;
      }
  }
  
  return arr.length ? 0 : 1
}

// 옛날 풀이
function solution(s) {
  let i = 0;

  while (s.length) {
    if (s[i] !== s[i + 1]) {
      if (i === s.length - 1) return 0;
      i++;
    } else {
      s = s.replaceAll(s[i] + s[i + 1], '');
      i = 0;
    }
  }

  return 1;
}

