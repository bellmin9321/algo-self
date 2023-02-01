//velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0

// 최대공약수(GCD) = Greatest Common Divisor
// 최소공배수(LCM) = Least Common Multiple

// 최소공배수 전형적인 풀이
https: function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  // 나머지가 있으면 왼쪽, 없으면(0이면) 오른쪽
  return a % b ? gcd(b, a % b) : b;
}

// 정답률 2번째로 높은 풀이
function nlcm(num) {
  var answer = 0;
  function gcd(a, b) {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  answer = num.reduce(function (a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    return lcm(min, max);
  });

  return answer;
}
