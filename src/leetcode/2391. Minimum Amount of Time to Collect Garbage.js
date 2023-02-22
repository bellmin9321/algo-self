// my solution(3중 for문) -> 시간 복잡도 낮추기
// Runtime 224 ms Beats 47.30% | Memory 56.9 MB Beats 93.24%
var garbageCollection = function (garbage, travel) {
  const trucks = ['M', 'P', 'G'];
  let result = 0;

  for (let i = 0; i < trucks.length; i++) {
    let lastIndex = -Infinity;
    let time = 0;

    for (let g = garbage.length - 1; g >= 0; g--) {
      if (garbage[g].includes(trucks[i])) {
        lastIndex = g;
        break;
      } else {
        continue;
      }
    }

    time += travel.reduce((a, b, i) => (a += i < lastIndex ? b : 0), 0);

    for (let j = 0; j <= lastIndex; j++) {
      let count = 0;

      for (let k = 0; k < garbage[j].length; k++) {
        if (garbage[j][k] === trucks[i]) count++;
      }

      time += count;
    }

    result += time;
  }

  return result;
};

// best
const garbageCollection = (garbage, travel) => {
  let travelTime = 0;
  garbage = garbage.reverse();

  for (const type of ['G', 'P', 'M']) {
    const lastHouseWithGarbage = garbage.findIndex(house =>
      house.includes(type),
    );

    if (lastHouseWithGarbage === -1) {
      continue;
    }

    travelTime += travel
      .slice(0, garbage.length - lastHouseWithGarbage - 1)
      .reduce((acc, num) => acc + num, 0);
  }

  return garbage.join('').length + travelTime;
};

// 2nd
var garbageCollection = function (garbage, travel) {
  let indxG = -1,
    indxP = -1,
    indxM = -1;
  let time = 0;
  // Prefix sum of travel time
  for (let i = 1; i < travel.length; i++) {
    travel[i] += travel[i - 1];
  }
  // sum up the length of strings in Garbege to compute colletion time
  for (let i = 0; i < garbage.length; i++) {
    time += garbage[i].length;
    // update the last seen index of 'G', 'P' and 'M' garbeges
    if (garbage[i].includes('G')) indxG = i;
    if (garbage[i].includes('P')) indxP = i;
    if (garbage[i].includes('M')) indxM = i;
  }
  // increament the time with the travel time
  if (--indxG >= 0) time += travel[indxG];
  if (--indxP >= 0) time += travel[indxP];
  if (--indxM >= 0) time += travel[indxM];
  return time;
};
