// Challenge 7: setTimeout vs Promise

console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");

// Analysis
// In JavaScript EventLoop, there is also the concept of priority.

// Tasks with higher priority are called microtasks.
// Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .

// Tasks with lower priority are called macrotasks.
// Includes: setTimeout , setInterval and XHR.
