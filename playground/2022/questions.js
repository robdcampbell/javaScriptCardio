/*

1) reverse a string
2) reverse an array

*/

//////////////////////////////////////////
//////////////////////////////////////////
// 1 _ reverse an string)
let str = "Hello world";

// MOST EFFICIENT - Cast to an array, use built in JS methods.
/*
    const reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
*/

// Using a forLoop
/*
let revStr = [];
for (let i = 0; i < str.length; i++) {
  revStr.unshift(str[i]);
}

revStr = revStr.join("");
console.log(revStr);

*/

// Using Recursion
for (let i = 0; i < str.length; i++) {
  if (i === 0) {
  } else {
  }
  console.log(str.substring(i));
}

//////////////////////////////////////////
//////////////////////////////////////////
// 2 _ reverse an array)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.reverse());
