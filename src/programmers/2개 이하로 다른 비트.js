// my solution
function solution(numbers) {
  return numbers.map(num => {
      let temp = num + 1;
      
      while((num ^ temp).toString(2).replaceAll('0', '').length > 2) temp++;
      
      return temp;
  })
}

// Try 2
function solution(numbers) {
  return numbers.map(num => {
      let temp = num + 1;
      
      while (true) {
          let tBit = temp.toString(2);
          let nBit = num.toString(2).padStart(tBit.length, '0');
          let count = 0;
          
          for (let i = 0; i < tBit.length; i++) {
              if (nBit[i] !== tBit[i]) {
                  count++;
              }
              if (count > 2) break;
          }
          
          if (count <= 2) return temp;
          temp++;
      }
  })
}

// Try3
function solution(numbers) {
  return numbers.map(num => {
      const bit = num.toString(2);
      
      if (num % 2 === 0) return parseInt(+bit + 1, 2);
      
      const zeroIndex = bit.lastIndexOf('0');
      const plus = zeroIndex >= 0 ? '1'.padEnd(bit.length - zeroIndex, '0') : '1'.padEnd(bit.length + 1, '0');

      return parseInt(+bit + +plus - (parseInt(plus, 2) / 2).toString(2), 2);
  })
}

/*
짝수일때는 간단합니다.
짝수를 2진수로 변홨했을때 1의 자리수가 0이기 때문에 +1 해주면 됩니다.
ex) 2 -> 10 -> 11 -> output data : 3
ex) 4 -> 100 -> 101 ->output data : 5
ex) 6 -> 110 -> 111 -> output data : 7

input data가 홀수
input data를 2진수 변환했을때 가장 먼저 나오는 0의 자리를 1로 나머지는 0으로
이 숫자를 input data에 더하고 이 숫자를 /2 한 값을 빼주시면 됩니다.
ex) 5 -> 101 -> 가장 먼저 나오는 0을 탐색(2의 1승자리) -> 101 + 10 - 1 -> 110 ->output data : 6
ex) 3 -> 11 -> 가장 먼저 나오는 0을 탐색(2의 2승자리) -> 11 + 100 - 10 -> 101 ->output data : 5
*/