// 내 풀이 (못 품)
var addBinary = function (a, b) {
  let numA = 0;
  let numB = 0;
  let countA = 0;
  let countB = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === '1') numA += Math.pow(2, countA); // 큰 숫자 연산 불가
    countA++;
  }

  for (let j = b.length - 1; j >= 0; j--) {
    if (b[j] === '1') numB += Math.pow(2, countB); // 큰 숫자 연산 불가
    countB++;
  }

  const sum = numA + numB;
  return sum.toString(2);
};

// BigInt를 이용한 풀이
var addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

// Math와 반복문 이용
var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1;
  let res = new Array(Math.max(a.length, b.length) + 1);
  let idx = Math.max(i, j) + 1;
  let carry = 0,
    sum = 0;
  while (i >= 0 && j >= 0) {
    sum = Number(a[i--]) + Number(b[j--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }

  while (i >= 0) {
    sum = Number(a[i--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }

  while (j >= 0) {
    sum = Number(b[j--]) + carry;
    res[idx--] = sum % 2;
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry > 0) {
    res[0] = carry;
  }
  return res.join('');
  // T.C: O(max(M,N))
  // S.C: O(max(M,N))
};
