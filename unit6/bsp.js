let read = require("readline-sync");

let captureElements = function (n) {
  let a = new Array();
  a = [];
  let i = 0;
  while (i < n) {
    let s = read.question("Next number please ");
    if (s != "" && isNaN(s) == false) {
      a.push(Number(s));
      i++;
    }
  }
  return a;
};

let biggestSubSeq = function (a) {
  let imax0b = 0;
  let imax0e = 0;
  let smax0 = a[0];

  for (let i = 0; i < a.length; i++) {
    let localSum = 0;

    for (let j = i; j < a.length; j++) {
      localSum += a[j];
      if (localSum > smax0) {
        imax0b = i;
        imax0e = j;
        smax0 = localSum;
      }
    }
  }
  a.push(imax0b);
  a.push(imax0e);
  a.push(smax0);
};

let Kadane = function (a) {
  let imax0b = 0;
  let imax0e = 0;
  let smax0 = a[0];
  let localSum = a[0];
  let localStart = 0;
  let localEnd = 0;

  for (let i = 1; i < a.length; i++) {
    if (localSum + a[i] < a[i]) {
      localSum = a[i];
      localStart = i;
      localEnd = i;
    } else {
      localSum += a[i];
      localEnd = i;
    }
    if (localSum > smax0) {
      smax0 = localSum;
      imax0b = localStart;
      imax0e = localEnd;
    }
  }
  a.push(imax0b);
  a.push(imax0e);
  a.push(smax0);
};

while (true) {
  let s = read.question("\n Input sequence size (Integer > 0)");
  let n = Number(s);
  if (s !== "" && Number.isInteger(n) && n > 0) {
    let m = parseInt(s);
    let arr = new Array();
    arr = captureElements(m);
    console.log("The captured sequence is ", arr);
    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        biggestSubSeq(arr);
        console.log("\n\n1st version");
      }
      if (i == 1) {
        Kadane(arr);
        console.log("\n\n2nd version (Kadane's algorithm)");
      }
      let s = arr.pop();
      let e = arr.pop();
      let b = arr.pop();
      let r = arr.slice(b, e + 1);

      console.log("Starting index of sub-sequence:", b);
      console.log("Ending index of sub-sequence:", e);
      console.log("The biggest sub-sequence is ", r);
      console.log("The sum of the biggest sub-sequence is ", s);
    }
  }
}
