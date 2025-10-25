class BinTreeClass {
  constructor(lev) {
    this.levels = lev;
    this.slots = [];
  }

  getTTNbOfElements() {
    let pw = Math.pow(2, this.levels) - 1;
    return pw;
  }
  initilizeBinTree() {
    let n = this.getTTNbOfElements();
    for (let i = 1; i <= n; i++) {
      this.slots.push(undefined);
    }
  }
  getElementInNode(p) {
    if (p < 1 || p > this.slots.length) {
      return undefined;
    }
    return this.slots[p];
  }

  putElementInNode(e, p) {
    let parentIndex = 0;
    if (p > this.slots.length - 1) {
      console.log("Out of bounds");
      return;
    }
    if (p == 0) {
      this.slots[p] = e;
      return;
    }
    if (p < this.slots.length) {
      if (p % 2 == 0) {
        parentIndex = Math.floor(p / 2) - 1;
      } else {
        parentIndex = Math.floor((p - 1) / 2);
      }
      if (this.slots[parentIndex] !== undefined) {
        this.slots[p] = e;
      }
    }
  }

  inorder(i = 0) {
    if (i < this.slots.length && this.slots[i] != undefined) {
      //   console.log(i);
      this.inorder(i * 2 + 1);
      console.log(this.slots[i]);
      this.inorder(i * 2 + 2);
      //   console.log(this.slots[i]);
    }
  }
}

let tree = new BinTreeClass(3);
tree.initilizeBinTree();
tree.putElementInNode(10, 0);
tree.putElementInNode(20, 1);
tree.putElementInNode(30, 2);

tree.putElementInNode(40, 3);
tree.putElementInNode(50, 4);
tree.putElementInNode(60, 5);
tree.putElementInNode(70, 6);
tree.inorder();
// console.log();
