// my solution
var mergeSimilarItems = function (items1, items2) {
  const longArr = items1.length > items2.length ? items1 : items2;
  const shortArr = items1.length > items2.length ? items2 : items1;

  return longArr
    .map(item => {
      const sameValueIndex = shortArr.findIndex(v => v[0] === item[0]);
      const sameValueArr =
        sameValueIndex >= 0 ? shortArr.sp따lice(sameValueIndex, 1)[0] : null;
      const weight2 = sameValueArr?.length ? sameValueArr[1] : 0;

      return [item[0], item[1] + weight2];
    })
    .concat(shortArr)
    .sort((a, b) => a[0] - b[0]);
};

// my solution 2
var mergeSimilarItems = function (items1, items2) {
  const cache = {};
  const concated = [...items1, ...items2];

  for (const [value, weight] of concated) {
    cache[value] = (cache[value] || 0) + weight;
  }

  return Object.entries(cache);
};

// best
const mergeSimilarItems = (items1, items2) => {
  let vwMap = new Map(); //vw abbreviates value weight

  for (let [value, weight] of items1.concat(items2)) {
    if (!vwMap.has(value)) {
      vwMap.set(value, weight);
    } else {
      vwMap.set(value, vwMap.get(value) + weight);
    }
  }

  return Array.from(vwMap.entries()).sort((a, b) => a[0] - b[0]);
};
