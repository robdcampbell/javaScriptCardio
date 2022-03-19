function args(val1, val2) {
  // Option 1
  //  return new Array(...arguments);

  // Option 2
  const argsArr = Array.from(arguments);
  return argsArr;
}

console.log(args("a", "b"));
