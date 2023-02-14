function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    const place = i + left;
    return Math.max(place % n, Math.floor(place / n)) + 1;
  });
}

function solution(n, left, right) {
  let answer = [];
  let y = Math.floor(left / n);
  let x = left % n;

  for (let i = 0; i <= right - left; i++) {
    answer.push(Math.max(x, y) + 1);
    if (x + 1 < n) {
      x++;
    } else {
      y++;
      x = 0;
    }
  }
  return answer;
}
