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