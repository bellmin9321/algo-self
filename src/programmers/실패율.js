// 2nd 풀이: ⭕️ Solved(40min)
function solution(N, stages) {
  let stage = 1;
  let copy = [...stages];
  const cache = {};

  while (stage <= N) {
    const failure = copy.filter(v => v === stage).length / copy.length;
    cache[stage] = failure;
    copy = copy.filter(v => v !== stage);
    stage++;
  }

  return Object.entries(cache)
    .sort((a, b) => b[1] - a[1])
    .map(v => +v[0]);
}

// 1st 풀이: ⭕️ Solved
function solution(N, stages) {
  const cache = {};
  let users = stages.length;

  for (let i = 1; i < N + 1; i++) {
    // N + 1은 마지막 스테이지까지 클리어 한 사용자이므로 실패율 0
    // 따라서 N + 1은 고려하지 않음
    const failedUsers = stages.filter(v => v === i).length;

    cache[i] = failedUsers / users;

    users -= failedUsers;
  }

  // object의 value 값을 내림차순으로 정렬 후 그에 해당하는 key로 배열 만듬
  return Object.entries(cache)
    .sort((a, b) => b[1] - a[1])
    .map(v => +v[0]);
}

// best
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter(x => x >= i).length;
    let curr = stages.filter(x => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map(x => x[0]);
}

// 2nd
function solution(N, stages) {
  let ans = [];

  for (let i = 1; i <= N; ++i) {
    let usersReachedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage >= i ? 1 : 0),
      0,
    );
    let usersStagnatedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage == i ? 1 : 0),
      0,
    );
    if (usersReachedCurrentStage === 0) {
      ans.push({ stage: i, failRate: 0 });
      continue;
    }

    ans.push({
      stage: i,
      failRate: usersStagnatedCurrentStage / usersReachedCurrentStage,
    });
  }

  return ans
    .sort((a, b) => {
      if (a.failRate > b.failRate) return -1;
      if (a.failRate < b.failRate) return 1;
      return a.stage - b.stage;
    })
    .map(entry => entry.stage);
}
