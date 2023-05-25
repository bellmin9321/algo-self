// 2번째 풀이: ❌ NotSolved(1h40m)  23.05.14
function solution(priorities, location) {
  const q = [];
  const leng = priorities.length;

  while (priorities.length) {
    const max = Math.max(...priorities);

    if (max > priorities[0]) {
      priorities.push(priorities.shift());
    } else {
      q.push(priorities.shift());
    }

    if (location === 0) {
      location = leng - 1;
    } else {
      location--;
    }
  }

  return location + 1;
}

// 첫번째 풀이: ⭕️ Solved
function solution(priorities, location) {
  let count = 0;

  while (true) {
    if (location < 0) {
      return count;
    }

    if (priorities[0] < Math.max(...priorities)) {
      const first = priorities.shift();
      location--;
      priorities.push(first);

      if (location < 0) {
        location = priorities.length - 1;
      }
    } else {
      // 첫번째 요소가 최댓값일 경우
      count++;
      location--;
      priorities.shift();
    }
  }
}

// best
function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;

  while (true) {
    let cur = list.splice(0, 1)[0];
    if (list.some(t => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

// 2nd
function solution(priorities, location) {
  let arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  let queue = [];

  while (arr.length > 0) {
    let firstEle = arr.shift();
    let hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}

// 3rd
function solution(priorities, location) {
  let answer = 0;

  while (priorities.length > 0) {
    let job = priorities.shift();
    if (priorities.some(i => i > job)) {
      priorities.push(job);
      if (location == 0) location = priorities.length - 1;
      else location--;
    } else {
      answer++;
      if (location == 0) return answer;
      else location--;
    }
  }

  return answer;
}
