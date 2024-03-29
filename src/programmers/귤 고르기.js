// 2nd solution: ⭕️ Solved(15min) -> 풀이 속도 향상 (23.05.14)
function solution(k, tangerine) {
  let ans = 0;
  const map = {};

  for (let n of tangerine) {
    map[n] = (map[n] || 0) + 1;
  }

  const sorted = Object.values(map).sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (k >= sorted[i]) {
      k -= sorted[i];
      ans++;
    } else {
      if (k > 0) ans++;
      break;
    }
  }

  return ans;
}

// my solution
function solution(k, tangerine) {
  const cache = [0];

  for (v of tangerine) {
    if (cache[v]) {
      cache[v]++;
    } else {
      cache[v] = 1;
    }
  }
  const sorted = [...cache].sort((a, b) => b - a);

  let count = 0;

  while (k > 0) {
    k -= sorted[count];
    count++;
  }

  return count;
}

// best
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};

  tangerine.forEach(t => (tDict[t] = (tDict[t] || 0) + 1));

  const tArr = Object.values(tDict).sort((a, b) => b - a);

  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }

  return answer;
}

// 2nd
function solution(k, tangerine) {
  let map = {};

  tangerine.forEach(item => (map[item] = (map[item] || 0) + 1));

  const sortArr = Object.values(map).sort((a, b) => b - a);

  let cnt = 0;
  while (k > 0) {
    cnt++;
    k -= sortArr.splice(0, 1)[0];
  }

  return cnt;
}
