function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}
