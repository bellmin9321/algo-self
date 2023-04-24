/*
a, e, i, o, u가 몇개 들어 있는지 출력하는 함수를 작성해주세요.

**예시**
- ex) abracadabra ⇒ 5
*/
const foo = str => {
  let sum = 0;
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  for (const s of str) {
    sum += vowels[s] || 0;
  }

  return sum;
};
