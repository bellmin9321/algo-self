function solution(a, b, n) {
  let cola = 0;

  while (n >= a) {
    let share = parseInt(n / a);
    let rest = n % a;

    cola += share * b;
    n = share * b + rest;
  }

  return cola;
}

// 이산 수학 풀이
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
