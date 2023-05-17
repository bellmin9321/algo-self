// my solution: ⭕️ Solved
function solution(s) {
  if (s.length % 2 !== 0) return 0;
  const cache = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const q = [];
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (cache[s[j]]) {
        q.push(cache[s[j]]);
      } else {
        if (s[j] === q.pop()) {
          if (j === s.length - 1) count++;
          else continue;
        } else break;
      }
    }

    const S = [...s];
    S.push(S.shift());
    s = S;
  }

  return count;
}

// best
function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;
  const mapping = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === '[' || rotate[j] === '(' || rotate[j] === '{')
        stack.push(rotate[j]);
      else {
        const last = stack.pop();
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}

// 2nd
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const arr = [];
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);

    for (let j = 0; j < temp.length; j++) {
      if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
      else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
      else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
      else arr.push(temp[j]);
    }
    if (arr.length === 0) answer++;
  }

  return answer;
}
