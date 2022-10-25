function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  const arr = [];
    
  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } 

  return arr;
}