let readline = require("readline-sync");

function seekGCD(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (num1 == NaN || num2 == NaN || (num1 <= 0 && num2 <= 0)) {
    return 0;
  }

  devider = Math.min(num1, num2);

  while (!(num1 % devider === 0 && num2 % devider === 0)) {
    devider--;
  }

  return devider;
}

while (true) {
  let num1 = readline.question("\n Input number 1: ");
  let num2 = readline.question("\n Input number 2: ");
  gcd_result = seekGCD(num1, num2);

  if (gcd_result) {
    console.log(`GCD between ${num1} and ${num2} is ${gcd_result}`);
    continue;
  }

  console.log(`Please make sure your inputs are correctly natural number`);
}
