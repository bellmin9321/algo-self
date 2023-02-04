// 2진수로 변경해서 푼 풀이
function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}

// 2진수로 변경해서 replace를 이용해서 푼 풀이
function solution(n) {
  return n.toString(2).replace(/0/g, '').length;
}

// 2진수로 변경해서 match를 이용해서 푼 풀이
function solution(n) {
  return n.toString(2).match(/1/g).length;
}
