// 내 풀이
function solution(a, b) {
  return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][
    new Date(`2016, ${a}, ${b}`).getDay()
  ];
}

// 다른 사람 풀이
function solution(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
