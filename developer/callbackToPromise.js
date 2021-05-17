const fetch = require("node-fetch");

const USER_ID = undefined; // 0, null etc

// id could be 1 to
const callbackGet = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((res) => {
      res;
      return res;
    })
    .catch((reason) => {
      reason;
      console.error(`An error ocurred: ${reason}`);
    });

const callbackToPromise = (id) =>
  new Promise((resolve, reject) =>
    callbackGet(id).then((res) => {
      if (res.id) {
        console.log("OK");
        resolve(res);
      }
      reject(new Error(`No ID found`));
    })
  );

// IIFE
(async () => {
  const result = await callbackToPromise(USER_ID);
  result;
})();
