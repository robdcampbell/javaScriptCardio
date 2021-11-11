// ***** MAKE SURE TO EDIT
// also - https://css.svahtml.com/7/index.html

////////////////////////
// CLASS 10
//////////////////////////

////////////////////////
// Loops
//////////////////////////
// For Loops
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

// Loop through an array

const arr = ["apples", "bananas", "oranges", "broccoli"];

for (let i = 0; i <= arr.length - 1; i++) {
  //console.log(arr[i]);
}

// Loop through a string
const str = "Hello world!";

for (let i = 0; i <= str.length - 1; i++) {
  // console.log(str[i]);
}

// WHILE LOOP
let counter = 0;

while (counter < 10) {
  // console.log(counter);
  counter++;
}

////////////////////////////////////////////////
// If statements and conditions
//////////////////////////////////////////////////

/*

if (condition){
  do this
} else {
  do another thing
}

*/

let num = 10;

// If statement
if (num > 100) {
  // console.log("Number is large");
}

// if else statement
if (num > 5) {
  // console.log("Number is greater than 5");
} else {
  // console.log("Number is less than 5");
}

// else if statement
if (num > 10) {
  // console.log("Number is more than 10");
} else if (num > 5) {
  // console.log("Number is greater than than 5, but less than 10");
} else {
  // console.log("Number is less than 5");
}

let val;

val = 10;

val == 10; // true
val === 10; // true
val === "10"; // FALSE
val < 10; // FALSE
val > 10; // FALSE
val <= 10; // true
val >= 10; // true
val !== 10; // FALSE

val > 0 || val > 10; // true
val > 0 && val > 10; // FALSE

////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////

// declare a function, function arguments

// return the function

// invoke the function

//
// FUNCTION EXAMPLES
//

//  1) Fuction: Add 2 values

const num1 = 5;
const num2 = 10;

function addNumbers(a, b) {
  return a + b;
}

// addNumbers(num1, num2);
// addNumbers(10, 20);

/////////////////////////
// 2) Log a user from an array

const userArr = ["Melissa", "Doug", "Ed", "Mary"];

function logNames(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

logNames(userArr);

//////////////////////////////////////////////////
// 3) Return an array of adult ages
const ages = [9, 65, 18, 22, 13, 32];

function isAdult(arr) {
  let adults = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`index ${i} : ${arr[i]}`);
    if (arr[i] >= 18) {
      adults.push(arr[i]);
    }
  }
  return adults;
}

console.log(isAdult(ages));

//////////////////////////////////////////////////
// 4) Return array of odd numbers

function oddNumbers(arr) {
  let oddNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNums.push(arr[i]);
    }
  }

  return oddNums;
}

console.log(oddNumbers([0, 1, 6, 7, 9, 3, 4, 55, 2]));

/////////////////////////
// 5) Convert Farenheit to celcius
// (0°C * 9/5) + 32

// function convertToFarenheit(deg) {}

function convertToFarenheit(deg) {
  return (deg * 9) / 5 + 32;
}

// console.log(convertToFarenheit(5));
// console.log(convertToFarenheit(30));

function exampleFunction(param) {
  // Do something in here
  return param;
}

exampleFunction();

////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////
