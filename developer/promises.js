const fetch = require("node-fetch");

// const user = { name: "Alonso" };
// const user = {};
// const userPromise = (user) =>
//   new Promise((resolve, reject) => {
//     if (Object.entries(user).length) {
//       resolve("User found! Fulfilled");
//     }
//     reject(new Error("No user found. Rejected"));
//   });
// userPromise(user).then((res) => {
//   res; // No user found. Rejected
//   return res;
// });

// const promisifiedExample = (ok) =>
//   new Promise((resolve, reject) => {
//     if (!ok) {
//       reject(new Error("Rejected"));
//     }
//     resolve("Fulfilled!");
//   });

// promisifiedExample(true).then((res) => {
//   res;
// });

const timeout = () => {
  const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout!");
    }, 1000);
  });
  return wait.then((result) => {
    result; // Timeout!
    return result;
  });
};

const timeoutResult = timeout();
timeoutResult;

const fetchResult = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.address);
    return user.address;
  });

fetchResult;
