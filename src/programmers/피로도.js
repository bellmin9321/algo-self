// my solution: ❌ NotSolved -> 테스트 9, 12, 13만 실패
function solution(k, dungeons) {
  let ans = 0;

  dungeons.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));

  for (const [minFatigue, fatigue] of dungeons) {
    if (k >= minFatigue) {
      k -= fatigue;
      ans++;
    }
  }

  return ans;
}

// my solution2
function solution(k, dungeons) {
  let ans = 0;

  while (k >= 0 && dungeons.length) {
    let countArr = [];
    console.log(dungeons);

    for (let i = 0; i < dungeons.length; i++) {
      let _k = k;
      _k -= dungeons[i][1];

      const rest = dungeons.filter(
        (dungeon, idx) => i !== idx && dungeon[0] <= _k,
      ).length;
      countArr.push(rest);
    }

    const maxIndex = countArr.indexOf(Math.max(...countArr));
    k -= dungeons[maxIndex][1];
    dungeons.splice(maxIndex, 1);
    ans++;
  }

  return ans;
}

// best
function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

// 2nd
let solution = (k, d) =>
  Math.max(
    ...d.map(([m, v], i) =>
      k < m ? 0 : solution(k - v, [...d.slice(0, i), ...d.slice(i + 1)]) + 1,
    ),
    0,
  );

// 3rd
function solution(k, dungeons) {
  const filtered = dungeons.slice().filter(v => v[0] <= k);

  let answer = 0;
  for (let i = 0; i < filtered.length; i++) {
    const subAnswer = solution(
      k - filtered[i][1],
      filtered.filter((_, j) => i !== j),
    );
    if (subAnswer + 1 > answer) answer = subAnswer + 1;
  }
  return answer;
}

// 4th
function solution(k, dungeons) {
  if (dungeons.length <= 0) return 0;

  let maxDungeons = 0;
  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0]) {
      let n = solution(
        k - dungeons[i][1],
        dungeons.slice(0, i).concat(dungeons.slice(i + 1)),
      );
      if (n + 1 > maxDungeons) {
        maxDungeons = n + 1;
      }

      if (maxDungeons >= dungeons.length) return maxDungeons;
    }
  }

  return maxDungeons;
}
