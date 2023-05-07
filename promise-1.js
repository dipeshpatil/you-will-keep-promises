// Synchronized code blocks are always executed sequentially from top to bottom.
console.log("start");

// When we call new Promise(callback), the callback function will be executed immediately.
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");
