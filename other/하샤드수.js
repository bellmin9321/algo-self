function solution(x) {
  return x % eval([...x.toString()].join('+')) ? false : true;
}

function Harshad(n) {
  let result;
  //함수를 완성하세요

  let str = n.toString();
  let sum = parseInt(str[0]);
  for (let i = 1; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  result = n % sum ? false : true;
  return result;
}
