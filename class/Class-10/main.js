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
  console.log(counter);
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
  console.log("Number is large");
}

// if else statement
if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is less than 5");
}

// else if statement
if (num > 10) {
  console.log("Number is more than 10");
} else if (num > 5) {
  console.log("Number is greater than than 5, but less than 10");
} else {
  console.log("Number is less than 5");
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

// Function examples
/*
  1) Simple addition
    function addNumbers(a, b) {
      return a + b;
    }
  
  2) Sort A list of numbers

  3) Conver Farenheit to celcius
    // (0°C * 9/5) + 32 

    function convertToFarenheit(deg){

    }

*/
function convertToFarenheit(deg) {
  return (deg * 9) / 5 + 32;
}

console.log(convertToFarenheit(5));
console.log(convertToFarenheit(30));
