// my solution
var findingUsersActiveMinutes = function (logs, k) {
  const cache = {};
  const ans = [];

  for (let i = 0; i < logs.length; i++) {
    if (cache[logs[i][0]]) {
      cache[logs[i][0]].push(logs[i][1]);
    } else {
      cache[logs[i][0]] = [logs[i][1]];
    }
  }
  const UAMs = Object.values(cache).map(arr => new Set(arr).size);

  for (let j = 1; j <= k; j++) {
    ans.push(UAMs.filter(v => v === j).length);
  }

  return ans;
};

// best
var findingUsersActiveMinutes = function (logs, k) {
  const map = new Map();

  for (const [userID, minute] of logs) {
    if (!map.has(userID)) map.set(userID, new Set());
    map.get(userID).add(minute);
  }

  const count = new Array(k).fill(0);

  for (const actions of map.values()) {
    count[actions.size - 1]++;
  }

  return count;
};

// 2nd
const findingUsersActiveMinutes = (logs, k) => {
  const count = {};
  const ret = new Uint32Array(k);
  for (const log of logs) {
    const id = log[0];
    if (!count[id]) count[id] = new Set();
    if (!count[id].has(log[1])) {
      const size = count[id].size;
      size > 0 && --ret[size - 1];
      ++ret[size];
      count[id].add(log[1]);
    }
  }
  return ret;
};
