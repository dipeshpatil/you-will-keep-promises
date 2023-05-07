console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// Analysis
// In this code snippet, a piece of asynchronous code appears. That is, the callback function in .then().

// Remember, the JavaScript engine always executes synchronous code first, then asynchronous code.
