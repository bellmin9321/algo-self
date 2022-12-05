function solution(absolutes, signs) {
  return absolutes.map((v, i) => {
     return signs[i] ? v : v * -1
  }).reduce((a,b) => a + b);
}