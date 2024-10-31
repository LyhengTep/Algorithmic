let readline = require("readline-sync");

while (true) {
  let name = readline.question("\nWhat is your name? ");

  console.log(`Hello ${name}`);
  console.log("Kind Regards");
}
