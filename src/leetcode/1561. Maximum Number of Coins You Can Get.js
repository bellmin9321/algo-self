// my solution
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let sum = 0;

  for (let i = piles.length - 2; i >= piles.length / 3; i -= 2) {
    sum += piles[i];
  }

  return sum;
};

// best
var maxCoins = function (piles) {
  const start = piles.length / 3;
  piles.sort((a, b) => a - b);
  let res = 0;
  for (let i = start; i < piles.length; i += 2) res += piles[i];
  return res;
};
