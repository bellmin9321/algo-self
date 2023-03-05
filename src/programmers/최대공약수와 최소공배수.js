function solution(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  const divisor = [];

  for (let i = 1; i <= Math.ceil(max / 2); i++) {
    if (max % i === 0 && min % i === 0) {
      divisor.push(i);
    }
  }

  let arr = [];

  for (let i = 1; i < 1000000; i++) {
    arr = [...arr, min * i, max * i];
    const filtered = arr.filter((v, i) => arr.indexOf(v) !== i);

    if (filtered.length > 0) {
      arr = filtered;
      break;
    }
  }

  return [Math.max(...divisor), Math.min(...arr)];
}

function solution(n, m) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (m % i === 0 && n % i === 0) {
      gcd = i;
    }
  }

  let lcm = 1;

  while (true) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }

    lcm++;
  }

  return [gcd, lcm];
}
