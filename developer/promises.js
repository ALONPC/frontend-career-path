const fetch = require("node-fetch");
// const timeoutMessage = (seconds, message, isError) => {
//   const wait = new Promise((res, rej) => {
//     try {
//       if (isError) {
//         rej(new Error("was told to throw error"));
//       }
//       setTimeout(() => {
//         res(message);
//       }, seconds);
//     } catch (error) {
//       console.error(error);
//     }
//   });
//   return wait.then((result) => {
//     // result
//     console.log(
//       "🚀 ~ file: promises.js ~ line 15 ~ timeoutMessage ~ result",
//       result
//     );

//     return result;
//   });
// };

// module.exports = { timeoutMessage };

const promisifiedExample = (ok) =>
  new Promise((resolve, reject) => {
    if (!ok) {
      reject(new Error("Rejected"));
    }
    resolve("Fulfilled!");
  });

promisifiedExample().then((res) => {
  res;
});

const timeout = () => {
  const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout!");
    }, 1000);
  });
  return wait
    .then((result) => {
      console.log("🚀 ~ result", result);
      return result;
    })
    .then((res) => res);
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
