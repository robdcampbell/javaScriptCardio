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
    console.log(i);
  };
  setTimeout(log, 100);
}
// Var is updated, hoisted to the parent lexical scope

// Using Let
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
