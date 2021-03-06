// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greet(you) { // you becomes closure within greeting()
  function greeting() {
    console.log(`Hey there, ${you}!`);
  }
  greeting();
}
greet("Matt");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return _ => ++count;
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log("Closure Stretch 1");
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    "increment": function() { return ++count; },
    "decrement": function() { return --count; },
  }
};
const otherCounter = counterFactory();
console.log("Closure Stretch 2");
console.log(otherCounter.increment());
console.log(otherCounter.increment());
console.log(otherCounter.increment());
console.log(otherCounter.decrement());

// IIFE testing
const iifeCounter = (_ => {
  let count = 0;
  return {
    "incr": function() { return ++count; },
    "decr": function() { return --count; },
  }
})();