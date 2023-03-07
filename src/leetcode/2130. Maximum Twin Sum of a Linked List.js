// my solution
var pairSum = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr.reduce(
    (acc, cur, i, arr) =>
      (acc =
        acc < cur + arr[arr.length - 1 - i]
          ? cur + arr[arr.length - 1 - i]
          : acc),
    0,
  );
};

// best
var pairSum = function (head) {
  let slow = head;
  let fast = head;

  // find midpoint of listNode
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half of listNode
  let prev = null;
  let nextNode = new ListNode();
  while (slow) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let maxVal = 0;
  // get max pair
  while (prev) {
    maxVal = Math.max(maxVal, prev.val + head.val);
    head = head.next;
    prev = prev.next;
  }

  return maxVal;
};
