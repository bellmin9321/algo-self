// my solution: ❌ NotSolved
var groupThePeople = function (groupSizes) {
  const result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (!result[groupSizes[i] - 1]) {
      result[groupSizes[i] - 1] = [i];
    } else {
      result[groupSizes[i] - 1].push(i);
    }

    if (result[groupSizes[i] - 1].length === groupSizes[i]) {
      result.push(result[groupSizes[i] - 1]);
    }
  }

  return result;
};

// best
var groupThePeople = function (groupSizes) {
  const result = [];
  const hash = {};

  for (let i = 0; i < groupSizes.length; i++) {
    const num = groupSizes[i];

    if (hash[num]) {
      hash[num].push(i);
    } else {
      hash[num] = [i];
    }

    if (hash[num].length === num) {
      result.push(hash[num]);
      delete hash[num];
    }
  }

  return result;
};

// 2nd
var groupThePeople = function (groupSizes) {
  let indices = [],
    result = [];
  groupSizes.forEach((x, idx) => {
    if (indices[x]) indices[x].push(idx);
    else indices[x] = [idx];
    if (indices[x].length === x) {
      result.push(indices[x]);
      indices[x] = undefined;
    }
  });
  return result;
};

// 3rd
var groupThePeople = function (groupSizes) {
  let groupMap = new Map();
  let result = [];

  groupSizes.forEach((size, i) => {
    if (!groupMap.has(size)) {
      groupMap.set(size, [i]);
    } else {
      if (groupMap.get(size).length === size) {
        result.push(groupMap.get(size));
        groupMap.set(size, [i]);
      } else {
        groupMap.get(size).push(i);
      }
    }
  });

  for (let array of groupMap.values()) {
    if (array.length >= 1) {
      result.push(array);
    }
  }

  return result;
};
