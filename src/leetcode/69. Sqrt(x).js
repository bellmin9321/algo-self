// while 문 이용 풀이: Runtime 105 ms Beats 46.4% | Memory 42.7 MB Beats 74.44%
var mySqrt = function (x) {
  let result = 1;

  while (result * result <= x) result++;

  return result - 1;
};

// Binary Search
var mySqrt = function (x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
