// my solution: ⭕️ Solved(30min)
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  cities = cities.map(city => city.toUpperCase());
  const cache = [];
  let ans = 0;

  for (const city of cities) {
    if (cache.includes(city)) {
      ans += 1;
      const targetIdx = cache.findIndex(v => v === city);
      cache.splice(targetIdx, 1);
    } else ans += 5;

    if (cache.length === cacheSize) cache.shift();

    cache.push(city);
  }

  return ans;
}

// best
function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  cities.forEach(city => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }

    cache.push(city);
  });

  return answer;
}

// 2nd
function solution(cacheSize, cities) {
  const map = new Map();
  const cacheHit = (city, map) => {
    map.delete(city);
    map.set(city, city);
    return 1;
  };
  const cacheMiss = (city, map, size) => {
    if (size === 0) return 5;
    map.size === size && map.delete(map.keys().next().value);
    map.set(city, city);
    return 5;
  };
  const getTimeCache = (city, map, size) =>
    (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(
      city.toLocaleLowerCase(),
      map,
      size,
    );
  return cities
    .map(city => getTimeCache(city.toLocaleLowerCase(), map, cacheSize))
    .reduce((a, c) => a + c, 0);
}

// 3rd
function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;

  const cache = [];
  let time = 0;
  for (const city of cities) {
    const city_low = city.toLowerCase();
    if (cache.includes(city_low)) {
      cache.splice(cache.indexOf(city_low), 1);
      cache.push(city_low);
      time++;
      continue;
    }

    cache.push(city_low);
    time += 5;

    if (cache.length > cacheSize) cache.shift();
  }

  return time;
}
