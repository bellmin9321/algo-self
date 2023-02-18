// 내 풀이: ❌ 못 풀음
var inorderTraversal = function (root) {
  if (!root) return [];

  const stack = [];

  while (root !== null) {
    if (root.left) {
      stack.push(inorderTraversal(root.left));
      root.val = root.left;
      continue;
    } else if (root.right) {
      root.val = root.right;
      stack.push(inorderTraversal(root.right));
      continue;
    }

    stack.push(inorderTraversal(root.val));
  }

  return stack;
};

// leetcode 최다 추천
function inorderTraversal(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}

// 재귀 풀이
var inorderTraversal = function (root) {
  var res = [];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
};

// while 문을 이용한 풀이
var inorderTraversal = function (root) {
  var stack = [];
  var now = root;
  var res = [];

  while (now || stack.length) {
    while (now) {
      stack.push(now);
      now = now.left;
    }
    now = stack.pop();
    res.push(now.val);
    now = now.right;
  }

  return res;
};

// ... 연산자를 이용한 풀이
const inorderTraversal = root => {
  if (!root) {
    return [];
  }

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
};
