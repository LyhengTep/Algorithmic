class LinkNode {
  constructor(value) {
    this.value = value;
  }
}

class LinkList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.current = null;
  }

  add(value) {
    const newNode = new LinkNode(value);
    if (!this.head) {
      this.head = newNode;
    }

    if (!this.current) {
      this.current = newNode;
      return;
    }

    this.current.next = newNode;
    this.current = newNode;
    this.size++;
  }

  putOnTop(value) {
    const newNode = new LinkNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //   addToEnd(value) {
  //     const newNode = new LinkNode(value);
  //     if (!this.head) {
  //       this.head = newNode;
  //       return;
  //     }

  //     while (this.current.next) {
  //       this.current = this.current.next;
  //     }
  //     this.current.next = newNode;
  //   }
}

let list = new LinkList();

list.add(10);
list.add(20);
list.add(30);

list.putOnTop(5);
console.log(list);
