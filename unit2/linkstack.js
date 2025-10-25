class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedStack {
  constructor() {
    this.top = null;
  }
  push(item) {
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let top_data = this.top.data;
    this.top = this.top.next;
    return top_data;
  }
}

function test() {
  let a = 1;
  let b = 2;
  let stack = new LinkedStack();
  stack.push(a);
  stack.push(b);

  console.log("Calling pop 1", stack.pop());
  console.log("Calling pop 2", stack.pop());
  console.log("Calling pop 3", stack.pop());
}
