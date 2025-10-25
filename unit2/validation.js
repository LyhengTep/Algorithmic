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
let isValid = (s) => {
  //   let s = "([])";

  let validBracketsPattern = /^[()\[\]{}]*$/;
  let validString = validBracketsPattern.test(s);

  console.log("valid string ", validString);
  if (!validString) {
    return false;
  }
  if (!(s.length >= 0 || s.length > Math.pow(10, 4))) {
    return false;
  }

  if (s.length == 1) {
    return false;
  }

  let stack = new LinkedStack();
  for (let i = 0; i <= s.length - 1; i++) {
    let ch = s[i];
    let o_arr = ["(", "{", "["];
    // console.log("checking data", ch);
    // let c_arr = [")", "}", "]"];
    if (o_arr.includes(ch)) {
      stack.push(ch);
    }

    if (ch == ")") {
      if (stack.top?.data == "(") {
        stack.pop();
        continue;
      }
      return false;
    }
    if (ch == "}") {
      if (stack.top?.data == "{") {
        stack.pop();
        continue;
      }
      return false;
    }

    if (ch == "]") {
      if (stack.top?.data == "[") {
        stack.pop();
        continue;
      }
      return false;
    }
  }

  if (stack.top) {
    return false;
  }
  return true;
};

console.log("checking is valid ==>", isValid("(])"));
