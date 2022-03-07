/*
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function closPract(val) {
  const secretPassword = "secret";

  function getPass() {
    if (val === secretPassword) {
      return " YOU'RE IN. ";
    } else {
      return " NOT TODAY, BUDDY. ";
    }
  }
  return getPass();
}
// Passphrase example, closure
// console.log(closPract("secrets"));

/// EXAMPLE / INTERVIEW EXAMPLE

// USING VAR
for (var i = 0; i < 3; i++) {
  const log = () => {
    // examine the repitition in dev tools debugger
    debugger;
    console.log(i);
  };
  setTimeout(log, 100);
}
// Var is updated, hoisted to the parent lexical scope
// var will act as a global variable that get's mutated over and
// over again.

// Using Let
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

// Let remains Block scope, or lexically scoped to
// the function body block.
