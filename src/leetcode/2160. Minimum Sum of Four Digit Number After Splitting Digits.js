// 내 풀이 1
var minimumSum = function (num) {
  // 숫자를 문자로 변경하고 오름차순으로 정렬
  const arr = [...`${num}`].sort((a, b) => a - b);

  // 1,3 번째 조합과 2,4 번째 조합이 최솟값
  return +(arr[0] + arr[2]) + +(arr[1] + arr[3]);
};
