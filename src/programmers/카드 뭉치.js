// 2번째 풀이: ⭕️ Solved(5min) 23.05.14
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
      continue;
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
      continue;
    }

    return 'No';
  }

  return 'Yes';
}

// my solution
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[i]) {
      goal.splice(i, 1);
      cards1.splice(i, 1);
      i--;
      continue;
    }

    if (goal[i] === cards2[i]) {
      goal.splice(i, 1);
      cards2.splice(i, 1);
      i--;
      continue;
    }
  }

  return goal.length ? 'No' : 'Yes';
}

// my solution 2
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
      continue;
    }

    if (goal[i] === cards2[0]) {
      cards2.shift();
      continue;
    }

    return 'No';
  }

  return 'Yes';
}

// best
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

// 2nd
function solution(cards1, cards2, goal) {
  for (let v of goal) {
    if (cards1.includes(v)) {
      if (cards1.shift() !== v) {
        return 'No';
      }
    } else {
      if (cards2.shift() !== v) {
        return 'No';
      }
    }
  }
  return 'Yes';
}
