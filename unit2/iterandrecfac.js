let factIter = function (n) {
  if (n >= 0) {
    let r = 1;
    for (let i = 1; i <= n; i++) {
      r = r * i;
    }
    return r;
  }
};

let factRec = function (n) {
  if (n >= 0) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factRec(n - 1);
  }
};

console.log("Factorial Iterative of 5: " + factIter(5));
console.log("Factorial Recursive of 5: " + factRec(5));
