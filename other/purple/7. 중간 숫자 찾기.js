/*
3개의 숫자 중에 2번째 크기의 숫자 위치를 찾는 함수를 작성해주세요.

**예시**

- ex) [0,1,2] ⇒ 1
- ex) [5,1,2] ⇒ 2
*/

const foo = arr => {
  arr.sort((a, b) => a - b);

  return arr[1];
};
// 원본 배열 유지 풀이
const bar = arr => {
  const copied = [...arr].sort((a, b) => a - b);

  return copied[1];
};
