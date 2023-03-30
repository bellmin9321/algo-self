// my solution > ❌ NotSolved
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
// solution 2
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
