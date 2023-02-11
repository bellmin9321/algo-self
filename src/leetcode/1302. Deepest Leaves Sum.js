// 내 풀이: ❌ NotSolved
// left, right 가 없는 요소만 찾아서 합하므로 가장 밑에 있는 leaf가 아님
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  function traverse(node) {
    if (!node.left && !node.right) {
      result += node.val;
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);
};

// 풀이 1: 배열 cache를 이용하여 depth 별로 합을 저장 후 마지막 요소가 depth가 가장 큰 합이므로 return
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  let cache = [];

  const dfs = (node, depth = 0) => {
    if (!node) return 0;
    cache[depth] = (cache[depth] || 0) + node.val;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root);

  return cache[cache.length - 1];
};

// 풀이 2: left & right 가 없는 node를 찾아서 배열에 한 데 모아 가장 깊은 깊이를 가진 노드만 합침
var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  const arr = [];

  const dfs = (root, curDepth) => {
    if (!root) return;
    if (!root.left && !root.right) {
      arr.push({
        depth: curDepth,
        value: root.val,
      });
      maxDepth = Math.max(maxDepth, curDepth);
    }

    dfs(root.left, curDepth + 1);
    dfs(root.right, curDepth + 1);
  };

  dfs(root, 0);

  const result = arr.reduce((acc, cur) => {
    return cur.depth === maxDepth ? acc + cur.value : acc + 0;
  }, 0);

  return result;
};

// 풀이 3: 풀이1 & 풀이2 응용
var deepestLeavesSum = function (root) {
  const arr = [];

  const dfs = (root, curDepth = 0) => {
    if (!root) return;
    if (!root.left && !root.right) {
      arr[curDepth] = (arr[curDepth] ?? 0) + root.val;
    }

    dfs(root.left, curDepth + 1);
    dfs(root.right, curDepth + 1);
  };

  dfs(root);
  return arr[arr.length - 1];
};

// 풀이 4
var deepestLeavesSum = function (root) {
  function findDepth(node) {
    if (!node) return 0;
    return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
  }

  const depth = findDepth(root);

  function callDFS(node, height) {
    if (!node) return 0;
    if (height === 1) return node.val;
    return callDFS(node.left, height - 1) + callDFS(node.right, height - 1);
  }
  return callDFS(root, depth);
};
