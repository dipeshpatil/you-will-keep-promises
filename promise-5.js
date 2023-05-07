console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

// Analysis
// This code deliberately adds a function to confuse challengers, and that is fn.

// But please remember that no matter how many layers of function calls there are, our basic principles remain the same:

// Execute synchronous code first, then asynchronous code
// Synchronous code is executed in the order in which it was called
