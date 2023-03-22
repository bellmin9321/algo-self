// my solution
var mergeTrees = function (root1, root2) {
  const root = new TreeNode();
  if (!root1) return root2;
  if (!root2) return root1;

  root.val = (root1?.val ?? 0) + (root2?.val ?? 0);
  if (root1?.left || root2?.left) {
    root.left = mergeTrees(root1.left, root2.left);
  }
  if (root1?.right || root2?.right) {
    root.right = mergeTrees(root1.right, root2.right);
  }

  return root;
};

// best
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  const root = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  return root;
};

// best2
var mergeTrees = function (t1, t2) {
  if (t1 && t2) {
    const newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees(t1.left, t2.left);
    newNode.right = mergeTrees(t1.right, t2.right);
    return newNode;
  }
  return t1 || t2;
};

// best3
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  const root = new TreeNode((t1?.val || 0) + (t2?.val || 0));
  root.left = mergeTrees(t1?.left, t2?.left);
  root.right = mergeTrees(t1?.right, t2?.right);
  return root;
};

// 2nd
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  // goal is to merge t2 to t1

  // if one of the node missing, return the other
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  // if both nodes exist, sum the values
  t1.val += t2.val;

  // do the same thing for left and right branch
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  // return the merged t1
  return t1;
};
