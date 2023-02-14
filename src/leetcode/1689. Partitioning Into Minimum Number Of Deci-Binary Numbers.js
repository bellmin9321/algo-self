// 내 풀이: 글자 중 가장 높은 수만큼 binary 필요함
var minPartitions = function (n) {
  return Math.max(...[...n].map(v => +v));
};

// 다른 풀이
var minPartitions = function (n) {
  return Math.max(...n);
};
