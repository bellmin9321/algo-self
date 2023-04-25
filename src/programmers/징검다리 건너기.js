// my solution: ❌ NotSolved
function solution(stones, k) {
  let ans = 0;
  let flag = false;
  let max = Math.max(...stones);

  while (max > 0) {
    for (let i = 0; i < stones.length - k; i++) {
      const maxJump = stones.slice(i, i + k).filter(v => v === 0).length;
      if (maxJump === k) {
        flag = true;
        break;
      }
    }
    if (flag) break;
    ans++;

    stones.forEach((stone, i) => {
      if (stones[i] > 0) stones[i] -= 1;
    });
    max--;
  }

  return ans;
}

// Try 2: 효율성만 실패
function solution(stones, k) {
  let ans = 0;
  let flag = false;
  let max = Math.max(...stones);

  while (max > 0) {
    const queue = [];

    for (let i = 0; i < stones.length; i++) {
      queue.push(stones[i]);
      stones[i];

      if (queue.length === k) {
        if (queue.reduce((a, b) => a + b) === 0) {
          flag = true;
          break;
        } else {
          queue.shift();
        }
      }
    }
    if (flag) break;
    ans++;

    stones.forEach((stone, i) => {
      if (stones[i] > 0) stones[i] -= 1;
    });
    max--;
  }

  return ans;
}

// Try 3: 속도 제일 빠름
function solution(stones, k) {
  let ans = 0;
  let max = Math.max(...stones);

  while (max > 0) {
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] === 0) count++;
      else {
        if (stones[i] > 0) stones[i] -= 1;
        count = 0;
      }

      if (count === k) return ans;
    }

    ans++;
    max--;
  }

  return ans;
}

// best
function solution(stones, k) {
  stones.push(Infinity);
  let stack = [{ count: Infinity, idx: -1 }];
  let answer = Infinity;
  for (let i = 0; i < stones.length; i++) {
    const right = { count: stones[i], idx: i };
    while (stack[stack.length - 1].count < right.count) {
      const mid = stack.pop();
      const left = stack[stack.length - 1];
      if (right.idx - left.idx > k) {
        answer = Math.min(answer, mid.count);
      }
    }
    stack.push(right);
  }
  return answer;
}

// 2nd
const binarySearch = (min, max, arr, k) => {
  while (min <= max) {
    const middle = parseInt((min + max) / 2);
    let count = 0;
    for (const el of arr) {
      if (el - middle <= 0) {
        count++;
      } else {
        count = 0;
      }
      if (count >= k) break;
    }

    if (count >= k) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }
  return min;
};

const solution = (stones, k) => {
  return binarySearch(0, 200000000, stones, k);
};
