class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;

    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node2.next = node3;
node1.next = node2;

const ll = new LinkedList(node1);

console.log(ll);
console.log(ll.getLast());
console.log(ll.size());
