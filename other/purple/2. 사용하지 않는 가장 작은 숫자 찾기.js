/*
0부터 시작하는 양수(+)인 ID가 있습니다. 여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.

**예시**

- ex) [0,1,2,4] ⇒ 3
- ex) [0,1,2,3,4,5,6] ⇒ 7

**주의할점**

- 정렬되지 않는 배열을 넣어도 동작해야함
- 중복된 숫자가 있는 경우도 동작해야함
*/
const foo = ids => {
  const sorted = ids.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) {
      return i;
    }
  }

  return ids.length;
};
