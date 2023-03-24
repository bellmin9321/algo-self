// my solution : ❌ NotSolved -> 전혀 감을 못잡음
var allPathsSourceTarget = function (graph) {
  console.log(graph.map(arr => arr.sort((a, b) => a - b)));
};

// best
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;

  const res = [];

  const DFS = (node, path) => {
    path.push(node);

    // if we've reached the target, we've found a path
    if (node === target) {
      res.push(path);
      return;
    }

    for (let edge of graph[node]) {
      DFS(edge, [...path]);
    }
  };

  DFS(0, []);

  return res;
};

// 2nd
var allPathsSourceTarget = function (graph) {
  const paths = [];
  const dfs = (index, path) => {
    // only if the path a target path
    if (path[path.length - 1] == graph.length - 1) {
      paths.push(path);
      return;
    }
    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], [...path, graph[index][i]]);
    }
  };
  dfs(0, [0]);
  return paths;
};

// 3rd
var allPathsSourceTarget = function (graph) {
  const ans = [];

  const dfs = (id, result) => {
    if (id === graph.length - 1) {
      ans.push(result);
    }

    for (const num of graph[id]) {
      dfs(num, [...result, num]);
    }
  };

  dfs(0, [0]);

  return ans;
};

// 4th
var allPathsSourceTarget = function (graph) {
  const results = [];
  findPaths([0], 0, graph, results);
  return results;
};

function findPaths(current, node, graph, results) {
  if (node == graph.length - 1) {
    results.push(current.slice(0));
    return;
  }

  for (let i = 0; i < graph[node].length; i++) {
    current.push(graph[node][i]);
    findPaths(current, graph[node][i], graph, results);
    current.pop();
  }
}
