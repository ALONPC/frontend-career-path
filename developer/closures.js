// const outer = () => {
//   let a = 10;
//   const inner = () => {
//     let b = 11;
//     console.log(`Result: ${a + b}`);
//   };
//   return inner;
// };

// const result = outer();
// result();

function outer() {
  const x = 1;
  setTimeout(function inner() {
    console.log(x);
  }, 4000);
}
outer();
//1 after 4s

function createCount(counter = 0) {
  return function () {
    counter += 1;
    return counter;
  };
}
const count = createCount(0);
console.log(count());
console.log(count());
console.log(count());
