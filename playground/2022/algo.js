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
// console.log(revArr(ex2));

// 3). sort and array alphabetically.

const ex3 = [
  "dog",
  "cat",
  "lizard",
  "pterodactyl",
  "cobra",
  "armadillo",
  "crane",
  "czar lizard",
];

// using sort method
const alphaSort = (arr) => {
  return arr.sort();
};

//console.log(alphaSort(ex3));

// 4). sort and array by word length

const ex4 = [
  "dog",
  "cat",
  "lizard",
  "pterodactyl",
  "cobra",
  "armadillo",
  "crane",
  "czar lizard",
];

const charSort = (arr) => {
  //  return arr.sort((a, b) => a.length - b.length);

  const newArr = [];

  for (let x of arr) {
    console.log(x);
  }
  return "DONE";
};

console.log(charSort(ex4));
