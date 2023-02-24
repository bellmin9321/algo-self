// my solution
var findCenter = function (edges) {
  const cache = {};
  const flat = edges.flat();
  for (let i = 0; i < flat.length; i++) {
    if (cache[flat[i]]) {
      cache[flat[i]]++;
    } else {
      cache[flat[i]] = 1;
    }
  }

  return Object.entries(cache).filter(v => v[1] !== 1)[0][0];
};

// my solution2
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const flat = edges.flat().sort((a, b) => a - b);

  for (let i = 0; i < flat.length - 1; i++) {
    if (flat[i] === flat[i + 1]) return flat[i];
  }
};

// best
const findCenter = edges => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

// best2
const findCenter = edges =>
  edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1]
    ? edges[1][0]
    : edges[1][1];

// 2nd
var findCenter = function (edges) {
  const [p1, p2] = edges[0];
  const [p3, p4] = edges[1];
  return p1 == p3 || p1 == p4 ? p1 : p2;
};
