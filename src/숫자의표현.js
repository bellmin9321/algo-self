function solution(n) {
  let n2 = n;
  let count = 1;

  for (let i = 1; i < n; i++) {
    n2 = n2 - i;

    for (let j = i + 1; j < n; j++) {
      n2 = n2 - j;

      if (n2 < 0) {
        n2 = n;
        break;
      } else if (n2 > 0) {
        continue;
      } else if (n2 === 0) {
        n2 = n;
        count++;
      }
    }
  }

  return count;
}
