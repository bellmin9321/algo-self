// 숫자 문자열이 담긴 배열을 만들어서 split과 join을 이용한 획기적인 풀이
// 'one'.split('one') 처럼 같은 요소로 split 하면 빈 문자열로 채워짐
// join(0) -> 배열 내 빈 문자열('')을 0으로 채우면서 stirng으로 변환
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// Object entries와 정규식을 이용한 풀이
function solution(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`, 'g');
    s = s.replace(re, value);
  }
  return parseInt(s);
}
