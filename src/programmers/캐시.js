// 내 풀이
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  const lowerCaseCities = cities.map(v => v.toLowerCase());
  const cache = [];
  let time = 0;

  for (let i = 0; i < lowerCaseCities.length; i++) {
    const targetIndex = cache.indexOf(lowerCaseCities[i]);
    // 캐시에 요소가 포함 ⭕️
    if (cache.indexOf(targetIndex >= 0)) {
      time += 1;
      cache.splice(targetIndex, 1);
    } else {
      // 캐시에 요소가 포함 ❌
      time += 5;
    }

    if (cache.length === cacheSize) cache.shift();

    cache.push(lowerCaseCities[i]);
  }

  return time;
}
