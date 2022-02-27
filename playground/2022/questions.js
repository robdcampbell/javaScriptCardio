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
/*
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
      } else {
      }
      console.log(str.substring(i));
    }
*/
//////////////////////////////////////////
//////////////////////////////////////////
// 2 _ reverse an array)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

////////////////////////////////
// 3 ) Detect Pangram

function isPangram(string) {
  const lower = Array.from(new Set(string.toLowerCase()));
  const filtered = lower
    .map((char, i) => {
      const strCode = lower.join("").toString();
      return strCode.charCodeAt(i);
    })
    .filter((char) => char >= 97 && char <= 122);

  if (filtered.length === 26) {
    return true;
  }
  return false;
}

const panGramTest = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(panGramTest));
