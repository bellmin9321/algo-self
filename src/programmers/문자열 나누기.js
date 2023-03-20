// my solution
function solution(s) {
  if (s.length === 1) return 1;
  let x = s[0];
  let count = 1;
  let ans = 0;

  for (let i = 1; i < s.length; i++) {
    s[i] === x ? count++ : count--;

    if (count === 0) {
      ans++;
      x = s[i + 1];
    }

    if (count !== 0 && i === s.length - 1) {
      ans++;
    }
  }

  return ans;
}

// best
function solution(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split('');
  let countSame = 1;
  let countInSame = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countInSame++;
    if (countSame === countInSame) break;
  }
  return solution(rest.slice(i + 1).join(''), count + 1);
}

// 2nd
function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
