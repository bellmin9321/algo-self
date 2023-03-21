// my solution
function solution(lottos, win_nums) {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  const matching = lottos.filter(v => win_nums.includes(v)).length;
  let zero = lottos.filter(v => v === 0).length;

  return [rank[matching + zero], rank[matching]];
}

// best
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

// 2nd
function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter(n => win_nums.includes(n)).length;
  const max = lottos.filter(n => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
