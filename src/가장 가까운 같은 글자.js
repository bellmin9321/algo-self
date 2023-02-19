// my solution
function solution(s) {
  const cache = {};
  let result = [];

  for (let i in s) {
    cache[s[i]] ? result.push(i - cache[s[i]]) : result.push(-1);

    cache[s[i]] = i;
  }

  return result;
}

// best
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

// 2nd
const solution = s =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

// 3rd
function solution(s) {
  const obj = {};
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] != null) answer[i] = i - obj[s[i]];
    else answer[i] = -1;
    obj[s[i]] = i;
  }
  return answer;
}
