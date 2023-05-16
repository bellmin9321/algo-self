// 2nd solution: ⭕️ Solved(40min)  23.05.14
function solution(want, number, discount) {
  let ans = 0;
  const cache = {};

  for (let i in want) {
    cache[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const copy = { ...cache };
    const slice = discount.slice(i, i + 10);

    slice.forEach(v => (copy[v] ? copy[v]-- : null));

    const sum = Object.values(copy).reduce((a, b) => a + b);
    if (sum === 0) ans++;
  }

  return ans;
}

// first solution
function solution(want, number, discount) {
  const cache = {};
  let count = 0;

  for (let i = 0; i < want.length; i++) {
    cache[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length; i++) {
    const temp = { ...cache };
    const slice = discount.slice(i, i + 10);
    slice.map(v => (temp[v] ? temp[v]-- : temp[v]));
    Object.values(temp).reduce((a, b) => a + b) === 0 ? count++ : 0;
  }

  return count ? count : 0;
}

// best
function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter(item => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}

// 2nd
function solution(want, number, discount) {
  let answer = 0;
  const info = {};
  for (let i = 0; i < number.length; i++) {
    info[`${want[i]}`] = info[`${want[i]}`] || number[i];
  }
  for (let i = 0; i <= discount.length - 10; i++) {
    let flag = true;
    for (let w of want) {
      if (
        discount.slice(i, i + 10).filter(x => x === w).length < info[`${w}`]
      ) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
