console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(2);
});

console.log("end");

// Analysis
// In this code, the resolve method has never been called, so promise1 is always in the pending state.
// So promise1.then(…) has never been executed. 2 is not printed out in the console.
