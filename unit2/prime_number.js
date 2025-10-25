let isPrimeIter = function (n) {
  if (n >= 2) {
    let r = true;
    let i = 2;
    while (r == true && i < n) {
      r = n % i != 0;
      i++;
    }
    return r;
  }
  return false;
};

let isPrimeRec = function (n, i = 2) {
  //   console.log("i: " + i);

  if (n >= 2) {
    if (i === n) return true;
    if (n % i === 0) return false;
    return isPrimeRec(n, i + 1);
  }

  return false;
};

n1 = 10;
n2 = 3;
console.log("Is " + n1 + " prime (iterative)? " + isPrimeIter(n1));

console.log("Is " + n2 + " prime (recursive)? " + isPrimeRec(n2));
