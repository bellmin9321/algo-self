function solution(brown, yellow) {
  let sum = brown + yellow;
  let x, y;

  for (let i = sum; i > 0; i--) {
    if (!(sum % i)) {
      // i를 가로라고 했을때 sum은 총 타일 즉 넓이
      // 나머지가 없어야 세로가 존재하는 가로값
      // 핵심은 결국 가로값 조건 걸고, brown 혹은 yellow조건으로 완전탐색
      x = i;
      y = sum / i;

      if ((x + y - 2) * 2 === brown) return [x, y];
    }
  }
}
