//console.log("Pterodactyls");

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

console.log(revStr("Pterodactyl"));

//
//////////////////////////////////////////////////////
// 4)
//////////////////////////////////////////////////////
//
