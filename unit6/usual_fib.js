let usualFib = function (n) {
  if (n >= 0) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }

    if (n >= 2) {
      let fp = 0;
      let fi = 1;
      for (let i = 2; i <= n; i++) {
        let f = fi;
        fi += fp;
        fp = f;
      }
      return fi;
    }
  }
};

console.log("Usual FIB ===>", usualFib(4));
