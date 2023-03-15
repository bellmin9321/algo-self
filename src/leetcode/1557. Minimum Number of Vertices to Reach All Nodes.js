// my solution: Runtime 211 ms Beats 33.96% Memory 74.6 MB Beats 14.47%
var findSmallestSetOfVertices = function (n, edges) {
  const first = [...new Set(edges.map(edge => edge[0]))];
  const second = new Set(edges.map(edge => edge[1]));

  return first.filter((v, i) => !second.has(v));
};

// best: Runtime 149 ms Beats 98.11% | Memory 65.6 MB Beats 88.68%
var findSmallestSetOfVertices = function (n, edges) {
  const degree = Array(n).fill(0);
  const output = [];
  edges.forEach(([u, v]) => degree[v]++);
  degree.forEach((deg, i) => !deg && output.push(i));
  return output;
};

// 2nd
var findSmallestSetOfVertices = function (n, edges) {
  let map = new Array(n);
  let ans = [];

  for (let [index, value] of edges) {
    map[value] = 1;
  }

  for (let i = 0; i < n; i++) {
    if (!map[i]) ans.push(i);
  }

  return ans;
};
