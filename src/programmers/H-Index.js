// 내 풀이
function solution(citations) {
  if (citations.length === 1) return 1;

  let result = 0;
  const max = Math.max(...citations);

  for (let h = 0; h < max; h++) {
    const above = citations.filter(v => v >= h).length;
    const below = citations.filter(v => v <= h).length;

    if (below <= h && h <= above) {
      result = result >= h ? result : h;
    }
  }

  return result;
}

// 베스트 풀이
function solution(citations) {
  citations = citations.sort(sorting);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;

  function sorting(a, b) {
    return b - a;
  }
}

// 2번째 풀이
const solution = citations =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;

// 3번째 풀이
function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    else break;
  }

  return answer;
}
