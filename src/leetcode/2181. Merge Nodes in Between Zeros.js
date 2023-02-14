// 내 풀이: 푸는 중 ❌ NotSolved
var mergeNodes = function (head) {
  if (!head) return;
  const node = ListNode();

  while (head) {
    if (!head.val) {
      head = head.next;
      continue;
    }

    node.val += head.val;
    head = head.next;
  }

  return result;
};

// 1위 풀이
var mergeNodes = function (head) {
  var res = new ListNode();
  var ans = res;
  var current = head.next;
  var sum = 0;
  while (current) {
    if (current.val != 0) {
      sum = sum + current.val;
    } else {
      res.next = new ListNode(sum);
      sum = 0;
      res = res.next;
    }
    current = current.next;
  }
  return ans.next;
};

// 2위 풀이
var mergeNodes = function (head) {
  let node = head; // start on first zero

  while (node.next) {
    node.val += node.next.val; // add current value to node
    node.next = node.next.next; // remove value between zeroes

    // remove last zero
    if (!node.next.next) {
      node.next = null;
      break;
    }
    // traverse node to next 0
    if (node.next.val === 0) {
      node = node.next;
    }
  }

  return head;
};
