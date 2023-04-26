// my solution: ❌ NotSolved -> 시간 초과
function solution(gems) {
  const ans = [];
  const map = {};
  const allLeng = new Set(gems).size;

  for (const gem of gems) {
    map[gem] = 1;
  }

  for (let i = 0; i < gems.length - allLeng + 1; i++) {
    for (let j = 0; j < gems.length - allLeng + 1; j++) {
      const copyMap = { ...map };

      const slice = gems.slice(i, i + allLeng + j);
      slice.forEach(v => {
        copyMap[v] -= copyMap[v] > 0 ? 1 : 0;
      });

      Object.values(copyMap).reduce((a, b) => a + b) === 0
        ? ans.push([i + 1, i + allLeng + j])
        : null;
    }
  }

  const diffArr = [...ans].map(v => Math.abs(v[0] - v[1]));
  const min = Math.min(...diffArr);
  const minIndex = diffArr.findIndex(diff => diff === min);

  return ans[minIndex];
}

// 개선
function solution(gems) {
  const ans = [];
  const set = new Set(gems);

  for (let i = 0; i < gems.length - set.size + 1; i++) {
    for (let j = 0; j < gems.length - set.size + 1; j++) {
      const slice = gems.slice(i, i + set.size + j);
      // console.log(slice)
      if ([...set].every(v => slice.includes(v))) {
        ans.push([i + 1, i + set.size + j]);
      }
    }
  }

  const diffArr = [...ans].map(v => v[1] - v[0]);
  const min = Math.min(...diffArr);
  const minIndex = diffArr.findIndex(diff => diff === min);

  return ans[minIndex];
}

// blog
function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;
  const gemMap = new Map();
  const gemLengths = [];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemVarietyCounts) {
      gemLengths.push([gemMap.values().next().value + 1, i + 1]);
    }
  });

  gemLengths.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });

  return gemLengths[0];
}
