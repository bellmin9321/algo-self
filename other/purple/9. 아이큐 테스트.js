/*
홀수 또는 짝수중에 하나만 존재하는 값의 순번을 출력하는 함수를 작성해주세요.

**예시**

- ex) "2 4 7 8 10" ⇒ 3 # 7만 홀수
- ex) "1 2 1 1" ⇒ 2 # 2만 짝수

**주의할점**

- 순번의 시작은 0이 아니라 1입니다.
*/
const foo = numbers => {
  const nums = numbers.split(' ');

  const odds = nums.filter(v => v % 2 !== 0); // 홀수
  const evens = nums.filter(v => v % 2 === 0); // 짝수
  const onlyOne = odds.length === 1 ? odds[0] : evens[0]; // 1개만 존재하는 수

  return nums.findIndex(v => v === onlyOne) + 1;
};
