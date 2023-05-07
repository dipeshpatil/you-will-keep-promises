// Challenge 8: Microtasks mix Macrotasks

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

// Analysis
// This challenge is easy to complete if you already understand the previous code challenge.

// We just need to do three steps:

// Find the synchronization code.
// Find the microtask code.
// Find the macrotask code.
