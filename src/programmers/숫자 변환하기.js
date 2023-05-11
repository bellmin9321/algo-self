// my solution: ❌ NotSolved
function solution(x, y, n) {
  if (x === y) return 0;
  const cache = [x];
  let i = 0;
  let ans = 0;

  while (x < y) {
    if (cache.includes(y)) return ans;
    const first = cache[ans] + n;
    const second = cache[ans] * 2;
    const third = cache[ans] * 3;

    cache.push(first, second, third);
    ans++;
  }

  return -1;
}

// hint
function solution(x, y, n) {
  if (x === y) return 0;

  const queue = [];
  const visited = new Array(y + 1).fill(0);
  queue.push([y, 0]);

  while (queue.length !== 0) {
    const [y, count] = queue.shift();
    if ((y - n) % 1 === 0 && x <= y - n && visited[y - n] === 0) {
      if (x === y - n) {
        return count + 1;
      }
      visited[y - n] = 1;
      queue.push([y - n, count + 1]);
    }
    if ((y / 2) % 1 === 0 && x <= y / 2 && visited[y / 2] === 0) {
      if (x === y / 2) return count + 1;
      visited[y / 2] = 1;
      queue.push([y / 2, count + 1]);
    }
    if ((y / 3) % 1 === 0 && x <= y / 3 && visited[y / 3] === 0) {
      if (x === y / 3) return count + 1;
      visited[y / 3] = 1;
      queue.push([y / 3, count + 1]);
    }
  }
  return -1;
}
