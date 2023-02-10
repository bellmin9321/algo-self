// 내 풀이
var smallestEvenMultiple = function (n) {
  // 최소 공배수
  while (n % 2 !== 0) {
    n += n;
  }

  return n;
};

var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : n * 2;
};
