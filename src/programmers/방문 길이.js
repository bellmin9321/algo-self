// my solution: ⭕️ Solved -> time over & 질문하기 힌트 봄
function solution(dirs) {
  let ans = 0;
  let x = 0,
    y = 0;
  const cache = {};

  for (let dir of dirs) {
    const _x = x,
      _y = y;

    if (dir === 'U') y++;
    else if (dir === 'D') y--;
    else if (dir === 'R') x++;
    else if (dir === 'L') x--;

    if (x > 5) x--;
    else if (y > 5) y--;
    else if (x < -5) x++;
    else if (y < -5) y++;

    if (cache[`${x}${y}${_x}${_y}`]) {
      continue;
    } else {
      if (`${x}${y}` !== `${_x}${_y}`) {
        cache[`${_x}${_y}${x}${y}`] = 1;
        cache[`${x}${y}${_x}${_y}`] = 1;
        ans++;
      }
    }
  }

  return ans;
}

// Try2: ❌ NotSolved
function solution(dirs) {
  const ans = [];
  const cache = {};
  let x = 0,
    y = 0;

  for (let dir of dirs) {
    const _x = x + '';
    const _y = y + '';

    if (dir === 'U') {
      y++;
    } else if (dir === 'D') {
      y--;
    } else if (dir === 'L') {
      x--;
    } else if (dir === 'R') {
      x++;
    }

    if (!(_x == x && _y == y)) {
      if (!cache[`${_x}${x}${_y}${y}`]) cache[`${_x}${x}${_y}${y}`] = 1;
    }
  }

  return new Set(ans).size;
}

// best
function solution(dirs) {
  const map = new Map();
  let now = [0, 0];
  let moved;

  for (let dir of dirs) {
    moved = move(now, dir);

    if (moved[0] < -5 || moved[0] > 5 || moved[1] < -5 || moved[1] > 5) {
      continue;
    }
    map.set(generateKey(now, moved), true);
    now = moved;
  }

  return map.size;
}

function move(now, dir) {
  switch (dir) {
    case 'L':
      return [now[0] - 1, now[1]];
    case 'R':
      return [now[0] + 1, now[1]];
    case 'U':
      return [now[0], now[1] + 1];
    case 'D':
      return [now[0], now[1] - 1];
  }
}

function generateKey(now, moved) {
  return `${Math.min(now[0], moved[0])},${Math.max(
    now[0],
    moved[0],
  )},${Math.min(now[1], moved[1])},${Math.max(now[1], moved[1])}`;
}

// 2nd
function solution(dirs) {
  const ansObj = {};
  let x = 0;
  let y = 0;

  for (let i = 0; i < dirs.length; i++) {
    let _x = x;
    let _y = y;
    let key = 'key';

    if (dirs[i] === 'U') {
      _y = y + 1;
      key += x + y + _x + _y;
    }
    if (dirs[i] === 'R') {
      _x = x + 1;
      key = key + x + y + _x + _y;
    }
    if (dirs[i] === 'D') {
      _y = y - 1;
      key = key + _x + _y + x + y;
    }
    if (dirs[i] === 'L') {
      _x = x - 1;
      key = key + _x + _y + x + y;
    }
    if (_x < -5 || _x > 5 || _y < -5 || _y > 5) {
      //do nothing
    } else {
      ansObj[key] = 1;
      x = _x;
      y = _y;
    }
  }

  return Object.keys(ansObj).length;
}
