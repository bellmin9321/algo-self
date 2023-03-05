// 못풀었음 하
function solution(n, a, b) {
  let count = 1;
  let orders = [];

  for (let i = 1; i <= n; i += 2) {
    orders.push(2 * i + 1);
  }

  while (true) {
    if (Math.abs(a - b) !== 1) {
      a % 2 === 0 ? (a /= 2) : (a = (a + 1) / 2);
      b % 2 === 0 ? (b /= 2) : (b = (b + 1) / 2);
      count++;
      n /= 2;
      orders = orders.splice(0, orders.length / 2);
    } else {
      if (orders.indexOf(a + b) >= 0) {
        return count;
      }
    }
  }

  return count;
}
