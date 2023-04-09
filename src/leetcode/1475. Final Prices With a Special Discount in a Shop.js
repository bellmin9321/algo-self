// my solution
var finalPrices = function (prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        break;
      } else {
        continue;
      }
    }
  }

  return prices;
};

// best
var finalPrices = function (prices) {
  let adjPrices = [];

  while (prices.length) {
    let currentPrice = prices[0];

    // Remove first price in original array
    // Since we're looking for a price less than or equal to
    prices.shift();

    let lowerPrice = prices.find(a => a <= currentPrice);
    adjPrices.push(lowerPrice ? currentPrice - lowerPrice : currentPrice);
  }

  return adjPrices;
};

// 2nd
const finalPrices = function (prices) {
  // monotonic stack
  const stack = [];
  const result = [];

  for (let i = prices.length - 1; i >= 0; i -= 1) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    result[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }

  return result;
};
