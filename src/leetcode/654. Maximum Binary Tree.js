// my solution (update)
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  const node = new TreeNode();
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);

  node.val = max;
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(
    nums.slice(maxIndex + 1, nums.length),
  );

  return node;
};

// my solution(origin)
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  const node = new TreeNode();
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const left = nums.slice(0, maxIndex);
  const right = nums.slice(maxIndex + 1, nums.length);

  if (nums.length) {
    node.val = max;
    node.left = constructMaximumBinaryTree(left);
    // node.left = left.length ? constructMaximumBinaryTree(left) : null;
    node.right = constructMaximumBinaryTree(right);
    // node.right = right.length ? constructMaximumBinaryTree(right) : null;
  }

  return node;
};

// best
const constructMaximumBinaryTree = (nums, low = 0, high = nums.length - 1) => {
  if (low > high) return null;
  let i = low;
  for (let j = low + 1; j <= high; j++) {
    if (nums[j] > nums[i]) i = j;
  }
  const root = new TreeNode(nums[i]);
  root.left = constructMaximumBinaryTree(nums, low, i - 1);
  root.right = constructMaximumBinaryTree(nums, i + 1, high);
  return root;
};

// 2nd
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  let head = new TreeNode(max);
  head.left = constructMaximumBinaryTree(nums.slice(0, index));
  head.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return head;
};

// 3rd
function constructMaximumBinaryTree(nums) {
  return next(0, nums.length - 1);

  function next(l, r) {
    if (l > r) return null;
    let maxIndex = -1,
      max = -Infinity;
    for (let i = l; i <= r; i++) {
      if (nums[i] > max) {
        maxIndex = i;
        max = nums[i];
      }
    }
    return {
      val: max,
      left: next(l, maxIndex - 1),
      right: next(maxIndex + 1, r),
    };
  }
}
