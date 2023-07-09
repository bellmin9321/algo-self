// 2번째 풀이: ⭕️ Solved(60min) 23.05.16
// cache 이용
function solution(n, lost, reserve) {
  const realLost = lost.filter(v => !reserve.includes(v));
  const realReserve = reserve.filter(v => !lost.includes(v));
  realLost.sort((a, b) => a - b);

  let ans = n - realLost.length;
  const cache = {};

  realReserve.forEach(v => (cache[v] = 1));
  realLost.forEach(v => {
    if (cache[v - 1]) {
      cache[v - 1]--;
      ans++;
    } else if (cache[v + 1]) {
      cache[v + 1]--;
      ans++;
    }
  });

  return ans;
}

// my solution
function solution(n, lost, reserve) {
  let rf = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
  let lf = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
  let save = 0;

  for (let i = 0; i < lf.length; i++) {
    for (let j = 0; j < rf.length; j++) {
      if (Math.abs(lf[i] - rf[j]) === 1) {
        save++;
        rf.splice(j, 1);
        break;
      }
    }
  }

  return n - (lf.length - save);
}

// best: ❌ NotSolved(21/25 통과)
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter(a => {
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}

// 2nd
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach(number => (students[number] -= 1));
  reserve.forEach(number => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
