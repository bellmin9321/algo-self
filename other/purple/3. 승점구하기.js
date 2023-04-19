/*
점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로 계산하여 전체 승점을 구하는 함수를 작성해주세요.

**예시**

- ex) ["3:1", "2:2", "1:3"] ⇒ 4

**주의할점**

- 10개의 경기 점수를 입력합니다.
- 0점에서 최대 4점까지 입력합니다.
*/

const foo = (games) => {
  let sum = 0;

  for (const game of games) {
    const [me, you] = game.split(':').map(v => +v);

    if (me > you) {
      sum += 3;
    } else if (me === you) {
      sum++;
    }
  }

  return sum;
}
