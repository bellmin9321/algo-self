// my solution: ❌실패 -> 기본 테스트만 통과
function solution(numbers, target) {
  if (sum(numbers) === target) return 1;

  numbers.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const left = numbers.slice(0, i);
    const right = numbers.slice(i);

    for (let j = 0; j < right.length; j++) {
      let leftSum = left.length ? sum(left) : 0;
      let rightSum = right.reduce(
        (acc, cur, idx) => acc + (idx === j ? -cur : cur),
        0,
      );

      if (leftSum + rightSum === target) count++;
    }

    numbers[i] *= -1;
  }

  return count;
}

const sum = arr => arr.reduce((a, b) => a + b);

// best: recursion
// https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);

  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  return answer;
}

// 2nd: BST를 직접 구현하여 푼 풀이;
function solution(numbers, target) {
  var answer = 0;
  var answer = 0;

  let root = new BinarySearchTree();
  root.insert(0);
  numbers.forEach(function (val) {
    root.insert(val);
  });

  answer = root.DFSPreOrder(target);
  return answer;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        if (node.left === null) {
          let leftNode = new Node(-value);
          let rightNode = new Node(value);
          node.left = leftNode;
          node.right = rightNode;
        }
      }
      traverse(current);
      return this;
    }
  }
  DFSPreOrder(target) {
    let count = 0;
    let data = 0;
    let current = this.root;
    function traverse(node) {
      data = data + node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (node.left === null) {
        if (data === target) {
          count++;
        }
      }
      data = data - node.value;
    }
    traverse(current);
    return count;
  }
}
