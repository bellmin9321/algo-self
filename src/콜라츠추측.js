function solution(num) {
  if (num === 1) return 0;
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    count++;

    if (num === 1) return count;
    if (count > 500) return -1;
  }
}

function solution(num) {
  if (num === 1) return 0;
  let count = 0;

  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);

    count++;

    if (num === 1) return count;
    if (count > 500) return -1;
  }
}
