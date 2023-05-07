// Challenge 6: The One With a Fulfilling Promise

console.log("start");

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log("end");

// Analysis
// Here Promise.resolve(1) will return a Promise object whose state is fulfilled and the result is 1.
// It is synchronous code.
