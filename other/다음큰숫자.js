function solution(n,a=n+1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
///////////
function nextBigNumber(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}
///////////
function nextBigNumber(n) {
  var size = n.toString(2).match(/1/g).length
  while(n++) {
      if(size === n.toString(2).match(/1/g).length) return n
  }
}
////////////
function nextBigNumber (n) {
  const k = count('1', n.toString(2))
  let m = n + 1

  while (count('1', m.toString(2)) !== k) {
    m++
  }

  return m
}

function count (a, bs) {
  let k = 0

  for (const b of bs) {
    if (b === a) k++
  }

  return k
}