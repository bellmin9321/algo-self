function solution(n) {
  let result = '수';
  
  while (n !== result.length) {
     result.length % 2 === 0 ? result += '수' : result += '박';
  }
  
  return result;
}