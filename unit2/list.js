class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getValue() {
    return this.data;
  }

  getCurrentElement(p) {
    let i = -1;
    let curr = new Node(null);
    while (i < p && curr.next != null) {
      i++;
      curr = curr.next;
    }

    if (i == p) {
      return curr.data;
    }

    return null;
  }
}

class List {
  constructor() {
    this.node = null;
  }

  pop() {
    let curr = this.node;
    let old = this.node;
    while (curr.next) {
      curr = curr.next;
      console.log("iterate", curr.next);
      if (curr.next != null) {
        old.next = curr;
        continue;
      }
      old.next = null;
    }
    this.node = old;
    return curr;
  }

  append(item) {
    let loc_node = new Node(item);
    if (!this.node) {
      this.node = loc_node;
      return item;
    }

    this.node.next = loc_node;
    return item;
  }

  getCurrentElement(p) {
    let i = 0;
    let cur = this.node;

    while (i < p && this.node.next) {
      i++;
      cur = this.node.next;

      console.log("current", cur);
    }

    return cur.data;
  }
}

function test() {
  let list = new List();

  list.append("Testing");
  list.append("Testing 1");
  list.append("Testing 2");
  // list.pop();
  console.log("test test ====>", list);
}

test();
