// my solution -> ❌ NotSolved: DP 이해 못함
function solution(land) {
  let ans = 0;
  const cache = {};

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      ans += Math.max(...land[i]);
      const maxI = land[i].indexOf(Math.max(...land[i]));
      land[i + 1] ? land[i + 1].splice(maxI, 1) : null;
      cache[maxI] = 1;
      break;
    }
  }

  return ans;
}
// my solution 2 -> ❌ NotSolved
function solution(land) {
  let ans = 0;
  const cache = [];

  land.sort((a, b) => Math.max(...a) - Math.max(...b));

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      ans += Math.max(...land[i]);
      const maxI = land[i].indexOf(Math.max(...land[i]));
      land[i + 1] ? land[i + 1].splice(maxI, 1, 0) : null;
      cache.push(maxI);
      break;
    }
  }

  return ans;
}

// best
function solution(land) {
  var answer = 0;

  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0],
    ),
  );
}

// 2nd
function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[land.length - 1]);
}

// 3rd
function hopscotch(board, size) {
  const final = board.reduce((scores, row) => {
    const newScores = [];

    scores.forEach((score, iscore) => {
      row.forEach((v, iv) => {
        if (iv === iscore) return;
        if (!newScores[iv]) newScores[iv] = [];
        newScores[iv].push(score + v);
      });
    });

    return newScores.map(scores => Math.max(...scores));
  });

  return Math.max(...final);
}
