// my solution: ⭕️ Solved(50min) 문제를 잘 읽자 -> Decreasing order라는 조건을 잘 봤으면 맨 마지막 요소만 비교하면 됐었음.
function climbingLeaderboard(ranked, player) {
  const set = [...new Set(ranked)];

  return player.map(v => {
    if (set[set.length - 1] > v) return set.length + 1;

    for (let i = 0; i < set.length; i++) {
      if (v >= set[i]) return i + 1;
    }
  });
}

// best
function climbingLeaderboard(scores, player) {
  let positions = [];
  let distScore = [...new Set(scores)];
  let i = distScore.length - 1;

  player.forEach(element => {
    while (i >= 0) {
      if (element >= distScore[i]) {
        i--;
      } else {
        positions.push(i + 2);
        break;
      }
    }

    if (i < 0) positions.push(1);
  });

  return positions;
}
