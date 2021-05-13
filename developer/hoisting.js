// Use with var
const hoisting = () => {
  var test;
  console.log(test);
  test = "This is a hoisting test";
  console.log(test);
};
hoisting();

// const hoisting = () => {
//   console.log(test);
//   test = "This is a hoisting test";
// };
// hoisting();

// Use with let and const
// const hoisting = () => {
//   console.log(test);
//   let test = "This is a hosting test";
// };
// hoisting();

// Using functions and functions declarations
// sayHi();
// const sayHi = () => {
//   console.log("hi");
// };

// sayHi();
// function sayHi() {
//   console.log("hi");
// }
