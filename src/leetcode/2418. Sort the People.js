// my solution
var sortPeople = function (names, heights) {
  const cache = [];
  for (let i in names) {
    cache.push([names[i], heights[i]]);
  }

  return cache.sort((a, b) => b[1] - a[1]).map(v => v[0]);
};
