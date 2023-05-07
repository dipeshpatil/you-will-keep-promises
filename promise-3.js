console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// Analysis
// This code is almost the same as the previous code; the only difference is that there is a console.log(3) after resolve(2).

// Remember, the resolve method does not interrupt the execution of the function.
// The code behind it will still continue to execute.
