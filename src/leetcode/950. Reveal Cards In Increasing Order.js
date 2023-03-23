// my solution: ❌ NotSolved -> 2시간 풀이 및 테스트 실패(6 / 33)
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const ans = [];
  const slice1 = deck.slice(0, Math.ceil(deck.length / 2));
  const slice2 = deck.slice(Math.ceil(deck.length / 2));

  while (slice1.length || slice2.length) {
    slice2.length > 1 ? slice2.push(slice2.shift()) : null;
    if (slice1.length) ans.push(slice1.shift());
    if (slice2.length) ans.push(slice2.shift());
  }

  return ans;
};

// best
const deckRevealedIncreasing = deck => {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};

// 2nd
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => b - a);
  let res = [];
  for (let i of deck) {
    if (res.length > 0) res.unshift(res.pop());
    res.unshift(i);
  }
  return res;
};
