class NodeClass {
  constructor(top, prevNode) {
    this.topElement = top;
    this.prevTopNode = prevNode;
  }

  getTopElement() {
    return this.topElement;
  }

  putMeOnTopOf(oldTopNode) {
    this.prevTopNode = oldTopNode;
  }

  removeMyTop() {
    if (!this.prevTopNode) {
      this.topElement = this.prevTopNode.topElement;
      this.prevTopNode = this.prevTopNode.prevTopNode;
      return;
    }

    this.topElement = undefined;
    this.prevTopNode = undefined;
  }

  displayMe() {
    let txt = `Displaying the stack
    Top of the stack`;
    let currTopEl = this.topElement;
    let currPreNode = this.prevTopNode;
    while (!currTopEl) {
      txt += "\n" + currTopEl;
      if (!currPreNode) {
        currTopEl = currPreNode.topElement;
        currPreNode = currPreNode.prevTopNode;
      } else {
        currTopEl = undefined;
      }
    }
    txt += "\n Bottom of the stack \n";
    return txt;
  }
}
