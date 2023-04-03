// my solution: ❌ NotSolved -> 2시간 초과 & 힌트 봄
function solution(m, n, board) {
  board = board.map(str => [...str]);
  let ans = 0;
  let cache = [];

  while (cache.length >= 0) {
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        if (board[r][c] === ' ') continue;
        if (board[r][c] !== board[r][c + 1]) continue;
        if (board[r][c] !== board[r + 1][c]) continue;
        if (board[r][c] !== board[r + 1][c + 1]) continue;

        cache.push(
          `${r}-${c}`,
          `${r}-${c + 1}`,
          `${r + 1}-${c}`,
          `${r + 1}-${c + 1}`,
        );
      }
    }

    if (cache.length === 0) break;

    [...new Set(cache)].forEach(idx => {
      const [r, c] = idx.split('-');
      board[r][c] = ' ';
      ans++;
    });

    for (let k = 0; k < n; k++) {
      for (let r = m - 1; r > 0; r--) {
        for (let c = 0; c < n; c++) {
          if (board[r][c] === ' ') {
            board[r][c] = board[r - 1][c];
            board[r - 1][c] = ' ';
          }
        }
      }
    }

    cache = [];
  }

  return ans;
}

// best
function solution(m, n, board) {
  board = board.map(v => v.split(''));

  while (true) {
    let founded = [];

    // 찾기
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          founded.push([i, j]);
        }
      }
    }

    if (!founded.length) return [].concat(...board).filter(v => !v).length;

    // 부수기
    founded.forEach(a => {
      board[a[0]][a[1]] = 0;
      board[a[0]][a[1] - 1] = 0;
      board[a[0] - 1][a[1] - 1] = 0;
      board[a[0] - 1][a[1]] = 0;
    });

    // 재정렬
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some(v => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}

// 2nd
const move = [
  [0, 1],
  [1, 0],
  [1, 1],
];

const del = (m, n, board) => {
  const delArr = [];
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === '-') continue;
      const stand = board[i][j];
      const targets = move.map(m => [i + m[0], j + m[1]]);
      if (targets.map(t => board[t[0]][t[1]]).every(e => e === stand)) {
        delArr.push([i, j], ...targets);
      }
    }
  }
  if (delArr.length > 0) {
    delArr.forEach(d => {
      board[d[0]][d[1]] = '-';
    });
    return true;
  }
  return false;
};

const down = (m, n, board) => {
  const re = [...Array(n)].map(() => []);
  board.forEach(b =>
    b.forEach((bb, i) => {
      re[i].push(bb);
    }),
  );
  re.map(r => [
    ...r.filter(rr => rr === '-'),
    ...r.filter(rr => rr !== '-'),
  ]).forEach((d, y) =>
    d.forEach((dd, x) => {
      board[x][y] = dd;
    }),
  );
};

const solution = (m, n, board) => {
  let cnt = 0;
  board = board.map(b => b.split(''));
  while (true) {
    if (!del(m, n, board)) break;
    down(m, n, board);
  }
  board.forEach(b =>
    b.forEach(bb => {
      if (bb === '-') cnt++;
    }),
  );
  return cnt;
};
