const fetch = require("node-fetch");

const promisifiedExample = (ok) =>
  new Promise((resolve, reject) => {
    if (!ok) {
      reject(new Error("Rejected"));
    }
    resolve("Fulfilled!");
  });

promisifiedExample(true).then((res) => {
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
