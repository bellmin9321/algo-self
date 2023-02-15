/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// my solution
var checkTree = function (root) {
  let sum = root.val;

  if (root.left) {
    sum -= root.left.val;
    checkTree(root.left);
  }
  if (root.right) {
    sum -= root.right.val;
    checkTree(root.right);
  }

  return sum === 0;
};
