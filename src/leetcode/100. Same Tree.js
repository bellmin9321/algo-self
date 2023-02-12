// 내 풀이: 전위 선회 Runtime 63 ms Beats 70.58% | Memory 42.6 MB Beats 7.18%
var isSameTree = function (p, q) {
  // 전위 선회
  let left = [];
  let right = [];

  function order(tree, res) {
    if (!tree) return;

    res.push(tree.val);

    tree.left ? order(tree.left, res) : res.push(null);
    tree.right ? order(tree.right, res) : res.push(null);
  }

  order(p, left);
  order(q, right);

  while (left.length && right.length) {
    if (left.pop() === right.pop()) {
      continue;
    } else {
      return false;
    }
  }

  return left.length === right.length;
};

// 추천 1위: Runtime 51 ms Beats 98.56% | Memory 42.5 MB Beats 18.6%
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// JSON.stringify 미친 풀이: Runtime 63 ms Beats 70.58% | Memory 42.1 MB Beats 78.50%
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

// 비재귀 풀이: Runtime 74 ms Beats 21.61% | Memory 42.6 MB Beats 7.18%
var isSameTree = function (p, q) {
  let stack = [[p, q]];

  while (stack.length) {
    let [x, y] = stack.shift();

    // if both leaves
    if (x == null && y == null) continue;
    if (!x || !y) return false;
    if (x.val == y.val) {
      stack.push([x.left, y.left]);
      stack.push([x.right, y.right]);
    } else return false;
  }
  return true;
};
