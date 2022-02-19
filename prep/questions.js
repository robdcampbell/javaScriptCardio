// console.log("Pterodactyls");

//
//////////////////////////////////////////////////////
// 1) Array -> String
//////////////////////////////////////////////////////
//

const toStr = (arr) => {
  // A. toString()
  // return arr.toString();

  // B. Append using a forEach loop:
  let newWord = "";
  arr.forEach((i) => (newWord += `, ${i}`));
  return newWord;
};

// TEST
// console.log(toStr(["a", 4, true, 21312, "Pterodactyl"]));

//
//////////////////////////////////////////////////////
// 2) String -> Array
//////////////////////////////////////////////////////
//

const toArr = (str) => {
  // a. Use Spread operator
  // return [...str];
  // b. Use split
  //return str.split("");
  // c. Use forLoop
  /*
 
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        newArr.push(str[i]);
    }
    return newArr;
*/
};

// TEST
// console.log(toArr("Pterodactyls"));

//
//////////////////////////////////////////////////////
// 3) Reverse a string
//////////////////////////////////////////////////////
//

const revStr = (str) => {
  // Higher Order Array methods
  return str.split("").reverse().join("");
};

// console.log(revStr("Pterodactyl"));

//
//////////////////////////////////////////////////////
// 4) DETECT LOWERCASE
//////////////////////////////////////////////////////
//

/*
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/

const lowerCase = "a";
const upperCase = "A";

// console.log(lowerCase.charCodeAt(0));
// console.log(upperCase.charCodeAt(0));

function detectWord(str) {
  return [...str].filter((val) => val.charCodeAt(0) > 96).join("");
}

//
//////////////////////////////////////////////////////
// 5) Adding a property to an object
//////////////////////////////////////////////////////
//
function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}

// console.log(addName({}, "dogs", 4));
// console.log(addName({ "lead-actor": "Batman" }, "villan", "Joker"));

console.log("ok ok ok oktest");
console.log(
  Array.from({
    length: 10,
    function(_, i) {
      return i + 1;
    },
  })
);
