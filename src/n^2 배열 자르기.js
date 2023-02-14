function solution(n, left, right) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    // 행
    let temp = [];

    for (let j = 1; j < n + 1; j++) {
      // 열
      i >= j ? temp.push(i + 1) : temp.push(j);
    }

    answer.push(temp);
  }
  return answer.flat().slice(left, right + 1);
}
// 제일 빠른 풀이
function solution(n, left, right) {
  // 123 223 333 | 1234 2234 3334 4444 | 12345 22345 33345 44445 55555
  let result = [];

  for (let i = 1; i < n * n + 1; i++) {
    let share = parseInt(i / n);

    if (i % n === 0) {
      result.push(n);
    } else {
      share >= i % n ? result.push(share + 1) : result.push(i % n);
    }
  }

  return result.slice(left, right + 1);
}

// 제일 빠른 풀이 2
function solution(n, left, right) {
  // 123 223 333 | 1234 2234 3334 4444 | 12345 22345 33345 44445 55555
  let result = [];

  for (let i = 1; i <= n * n; i++) {
    let share = parseInt(i / n);

    if (i % n === 0) {
      result[i - 1] = n;
    } else {
      share >= i % n ? (result[i - 1] = share + 1) : (result[i - 1] = i % n);
    }
  }

  return result.slice(left, right + 1);
}

function solution(n, left, right) {
  // 123 223 333 | 1234 2234 3334 4444 | 12345 22345 33345 44445 55555
  let result = [];
  let arr = Array.from({ length: n }, (v, i) => i + 1);

  for (let i = 1; i < arr.length + 1; i++) {
    const temp = Array.from({ length: i }, v => i);

    result.push(temp.concat(arr.slice(i)));
  }

  return result.reduce((a, b) => a.concat(b), []).slice(left, right + 1);
}

// 문자열을 이용한 풀이
function solution(n, left, right) {
  // 123 223 333 | 1234 2234 3334 4444 | 12345 22345 33345 44445 55555
  let result = `${n}`.repeat(n);
  let str = result;
  let count = 1;

  while (n > 1) {
    let temp = '1'.repeat(--n) + '0'.repeat(count++);
    str = `${+str - +temp}`;

    result = str + result;
  }

  return [...result].map(v => +v).slice(left, right + 1);
}
