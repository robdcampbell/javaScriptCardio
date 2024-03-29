// Homework Class 10 - Functions Practice
/////////////////////////////////////////

// Example:
function exampleFunc(param1, param2) {
  // Write code here, using params
  return;
}

console.log(exampleFunc());

/////////////////////////////////////////
// 1) Create a function that logs all the values in an array to the console.

function logAllValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logAllValues(["string", 9, true, "Hello World"]);

/////////////////////////////////////////
// 2) Create a function that returns a new array with words longer than 5 letters.

function longWords(arr) {
  let newWordsArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      newWordsArr.push(arr[i]);
    }
  }
  return newWordsArr;
}

console.log(longWords(["string", "to", "cat", "Pterodactyl", "Hello"]));

/////////////////////////////////////////
// 3) Create a function that returns a new, all uppercase string.

function upperCaseStr(str) {
  return str.toUpperCase();
}

console.log(upperCaseStr("HelLO WoRLd"));

/////////////////////////////////////////
// 4) Create a function that takes a number in Farenheit, and converts to number in Celcius
// formula: (F − 32) × 5/9 = °C

function toCelsius(deg) {
  return ((deg - 32) * 5) / 9;
}

console.log(toCelsius(72));
