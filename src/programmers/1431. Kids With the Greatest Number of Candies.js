// 내 풀이
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    max <= candies[i] + extraCandies
      ? (candies[i] = true)
      : (candies[i] = false);
  }

  return candies;
};

// 1위 풀이
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);

  return candies.map(candy => candy + extraCandies >= max);
};

// sort, pop으로 최댓값 구해서 map을 이용한 풀이
var kidsWithCandies = function (candies, extraCandies) {
  // sort는 순수함수가 아니므로 깊은복사를 해야함
  const max = [...candies].sort((a, b) => a - b).pop();

  return candies.map(candy => candy + extraCandies >= max);
};
