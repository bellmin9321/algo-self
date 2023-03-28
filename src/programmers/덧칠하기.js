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
