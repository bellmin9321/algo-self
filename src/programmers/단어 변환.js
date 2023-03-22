// ❌ NotSolved
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (new Set(begin + words[i]).size === 4) {
      begin = words[i];
      count++;
    } else continue;

    if (new Set(begin + target).size === 4) return ++count;
  }

  return count;
}
