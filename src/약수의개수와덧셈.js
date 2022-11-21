function solution(left, right) {
  let sum = 0;
  let count = 0;

  while (left <= right) {
    for (let i = 1; i <= left; i++) {
      if (left % i === 0) count++;
    }

    if (count % 2 === 0) {
      sum += left++;
      count = 2;
    } else {
      sum -= left++;
      count = 2;
    }
  }

  return sum;
}
