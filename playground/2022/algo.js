// 1). rev a string

const ex1 = "Hello World.";

let reverseStr = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};

//ANSWER
// console.log(reverseStr(ex1));

// 2). rev an array

const ex2 = ["a", "b", "c", "d", "e"];

const revArr = (arr) => {
  return arr.reverse();
};

//ANSWER
console.log(revArr(ex2));
