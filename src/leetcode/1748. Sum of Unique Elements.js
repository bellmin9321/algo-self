// my solution
var sumOfUnique = function (nums) {
  const cache = {};

  for (let num of nums) {
    cache[num] = (cache[num] || 0) + 1;
  }

  return Object.entries(cache).reduce(
    (a, b) => (a += b[1] === 1 ? +b[0] : 0),
    0,
  );
};
