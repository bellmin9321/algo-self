// my solution
function solution(n, k) {
  const nums = n
    .toString(k)
    .split(0)
    .filter(num => isPrime(num)).length;
  return nums;
}

function isPrime(n) {
  if (n === '' || n < 2) return false;

  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// best
function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // k진법으로 나눈 후 split
  const candidates = n.toString(k).split('0');
  // 소수 개수 세기
  return candidates.filter(v => isPrime(+v)).length;
}
