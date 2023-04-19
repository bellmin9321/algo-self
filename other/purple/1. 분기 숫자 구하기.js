/*
1~12월중에 숫자를 입력받고 1분기, 2분기, 3분기, 4분기를 리턴하는 함수를 작성해주세요.

**예시**

- ex) 3 ⇒ 1
- ex) 8 ⇒ 3
- ex) 11 ⇒ 4

**주의할점**

- 1부터 12까지의 숫자만 입력합니다.
*/

const foo = (month) => {
  const season = {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
    11: 4,
    12: 4,
  }

  return season[month];
}
// 다른 풀이
const getSeason = (month) => {
  if (month < 1) alert('Month does not less 1');
  if (month > 12) alert('month does not exceed 12');
  
  if (month < 4) return 1;
  else if (month < 7) return 2;
  else if (month < 10) return 3;
  else return 4;
}
