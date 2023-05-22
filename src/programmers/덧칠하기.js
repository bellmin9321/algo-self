// 2번째 풀이: ⭕️ Solved(20min) 23.05.15
function solution(n, m, sections) {
  if (n === 1) return sections.length;

  let ans = 1;
  let start = sections[0];

  for (let i = 1; i < sections.length; i++) {
    if (sections[i] - start < m) continue;
    else {
      start = sections[i];
      ans++;
    }
  }

  return ans;
}

// My solution
function solution(n, m, section) {
  let sum = section[0] + m - 1;
  let ans = 1;

  for (let i = 1; i < section.length; i++) {
    if (sum >= section[i]) continue;
    else sum = section[i] + m - 1;

    ans++;
  }

  return ans;
}

// New best
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach(el => {
    arr[el] = 1;
  });

  section.forEach(el => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });

  return count;
}

// best
function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;

  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }

  return answer;
}

// 2nd
function solution(n, m, section) {
  let done = 0;
  let count = 0;

  for (const num of section) {
    if (num > done) {
      done = num + m - 1;
      count++;
    }
    if (done > n) break;
  }

  return count;
}
