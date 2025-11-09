const isPrime2 = require("./is_prime2");

test("throw for abc as non integer", () => {
  expect(() => {
    isPrime2("abc");
  }).toThrow("Sorry Only Integers are allowed");
});
