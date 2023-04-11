// my solution: ❌ NotSolved -> 접근조차 못함
function solution(maps) {
  let ans = 0;
  const roads = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === maps[i + 1][j]) {
        maps[i][j] = 7;
        ans++;
      }

      if (
        (i > 0 && maps[i][j] === maps[i - 1][j]) ||
        maps[i][j] === maps[i + 1][j] ||
        maps[i][j] === maps[i][j + 1]
      ) {
      }
    }
  }

  function dfs(arr, num) {
    const cache = {};

    cache[arr[num]] = (cache[arr[num]] || 0) + 1;

    if (!cache[arr[num]] && arr.includes(arr[num].split('-'))) {
    }
  }

  dfs(roads, 0);

  return ans;
}

// best
function solution(maps) {
  const yLen = maps.length - 1;
  const xLen = maps[0].length - 1;

  const queue = [[0, 0]];

  const visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false),
  );

  let result = 0;

  while (queue.length) {
    result++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const point = queue.shift();
      const curY = point[0];
      const curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1)
        queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1)
        queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}

// bfs
function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [[0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}

// 2nd
function solution(maps) {
  const mapsWidth = maps[0].length;
  const mapsHeight = maps.length;
  const MIN_LENGTH = mapsWidth + mapsHeight - 1;
  const startPoint = [0, 0];
  const destPoint = [mapsWidth - 1, mapsHeight - 1];

  let answer = -1;
  let isDestPointTouched = false;
  let hasMinLength = false;
  let queue = [{ point: startPoint, size: 1 }];
  while (queue.length && !hasMinLength) {
    run(queue.shift());
  }
  return answer;

  function run(params) {
    const lastPoint = params.point;
    const size = params.size;

    if (hasMinLength) return;
    if (isDestPointTouched && !checkPossiblePoint(lastPoint, size)) {
      return;
    }
    if (isSamePoint(lastPoint, destPoint)) {
      if (size === MIN_LENGTH) {
        hasMinLength = true;
        queue = [];
      }
      isDestPointTouched = true;
      answer = size;
      return;
    }

    let candidate;
    const candidateSize = size + 1;
    const candidateList = getCandidateList(lastPoint);
    for (let i = 0; i < candidateList.length; i++) {
      const point = verifyCandidate(candidateList[i], size);
      if (!candidate && point) {
        setPointValue(point, candidateSize);
        candidate = point;
      } else if (point) {
        setPointValue(point, candidateSize);
        queue.push({
          point: point,
          size: candidateSize,
        });
      }
    }
    if (candidate) {
      run({
        point: candidate,
        size: candidateSize,
      });
    }
  }

  function verifyCandidate(candidate, size) {
    const candidateValue = getPointValue(candidate);
    if (
      candidateValue === 1 ||
      (candidateValue > 1 && size + 1 < candidateValue)
    ) {
      return candidate;
    }
  }

  function getCandidateList(lastPoint) {
    const result = [];
    const lastPointX = lastPoint[0];
    const lastPointY = lastPoint[1];
    const candidateList = [
      [lastPointX + 1, lastPointY], // right
      [lastPointX, lastPointY + 1], // bottom
      [lastPointX - 1, lastPointY], // left
      [lastPointX, lastPointY - 1], // top
    ];
    for (let i = 0; i < candidateList.length; i++) {
      const candidate = candidateList[i];
      const x = candidate[0];
      const y = candidate[1];
      const inBoundary = x > -1 && x < mapsWidth && y > -1 && y < mapsHeight;
      if (inBoundary && maps[y][x] && !isSamePoint(candidate, startPoint)) {
        result.push(candidate);
      }
    }
    return result;
  }

  function checkPossiblePoint(point, size) {
    const cost = destPoint[0] - point[0] + (destPoint[1] - point[1]);
    return size + cost < answer;
  }

  function isSamePoint(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  }

  function setPointValue(point, value) {
    maps[point[1]][point[0]] = value;
  }

  function getPointValue(point) {
    return maps[point[1]][point[0]];
  }
}

// 3rd
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function BFS(startData, maps) {
  const rowLength = maps.length;
  const colLength = maps[0].length;
  let queue = [startData];
  while (queue.length > 0) {
    const [popRow, popCol, moveCount] = queue.shift();
    maps[popRow][popCol] = 0;
    for (const dir of direction) {
      const newRow = popRow + dir[0];
      const newCol = popCol + dir[1];
      if (newRow === rowLength - 1 && newCol === colLength - 1) {
        return moveCount + 1;
      } else if (
        newRow >= 0 &&
        newRow < rowLength &&
        newCol >= 0 &&
        newCol < colLength &&
        maps[newRow][newCol] === 1
      ) {
        maps[newRow][newCol] = 0;
        queue.push([newRow, newCol, moveCount + 1]);
      }
    }
  }
  return -1;
}

function solution(maps) {
  return BFS([0, 0, 1], maps);
}
