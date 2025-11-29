let Parallel = require("paralleljs");

let pairRoAndColValues = function (ro, cl) {
  let rcpa = new Array();
  for (let i = 0; i < ro.length; i++) {
    let rcv = { rowV: Number(ro[i]), colV: Number(cl[i]) };
    rcpa.push(rcv);
  }
  return rcpa;
};

let pMultRC = function (xy) {
  console.log("call multiplication", xy);

  return xy.rowV * xy.colV;
};

addAll = function (d) {
  console.log("data addAll", d[0], d[1]);

  return d[0] + d[1];
};
let log = function () {
  console.log(arguments[0]);
};
let row = new Array();
let col = new Array();

row = "1,2,3,4,5".split(",");
col = "5,6,7,8,5".split(",");

let rcpairs = pairRoAndColValues(row, col);
console.log("row pair value", rcpairs);

let p = new Parallel(rcpairs);
console.log("Pairwise multiplication of the row and column");
// p.map(pMultRC).then(log);
p.map(pMultRC).reduce(addAll).then(log);

// var p = new Parallel([40, 41, 42]),
//   log = function () {
//     console.log(arguments);
//   };
// // One gotcha: anonymous functions cannot be serialzed
// // If you want to do recursion, make sure the function
// // is named appropriately
// function fib(n) {
//   return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
// }
// p.map(fib).then(log);
