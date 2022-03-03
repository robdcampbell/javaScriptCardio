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
// console.log(isPangram(panGramTest));

////////////////////
// 4) return a num in descending order

function descendingOrder(n) {
  //...
  return Number([...String(n)].sort((a, b) => b - a).join(""));
}

// console.log(descendingOrder(9875));
// console.log(descendingOrder(123));

////////////////////////////////////////
// 5) Take a Ten Minute Walk

// origin: [0,0]
// vertical count, start 0. n===+1, s===-1
// horizontal count, start 0. n===+w, e===-1

// if [0,0] true, else false.
function isValidWalk(walk) {
  //insert brilliant code here
  let x = 0;
  let y = 0;

  if (walk.length !== 10) {
    return false;
  }

  walk.forEach((coord) => {
    coord === "n"
      ? x++
      : coord === "s"
      ? x--
      : coord === "w"
      ? y--
      : coord === "e"
      ? y++
      : 0;
  });
  return x === 0 && y === 0;
}

// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// );

////////////////////////////////////////
// 6) Return Negative
function makeNegative(num) {
  num === 0 ? num : num > 0 ? (num = num * -1) : num;
  return num;
  //  return -Math.abs(num);
  //  return num < 0 ? num : -num;
}

//////////////////////////////////////////
// 7)
// ISOGRAM (test if a word has all unique characters)
function isIsogram(str) {
  const lower = str.toLowerCase();
  return lower.length === new Set(lower.split("")).size;
}

//////////////////////////////////////////
// 8) Build Tower
function towerBuilder(nFloors) {
  // build here
  let tower = [];

  for (let i = 1; i <= nFloors; i++) {
    // num of stars
    let stars;
    i === 1 ? (stars = 1) : (stars = i * 2 - 1);
    let row = new Array(stars).fill("*").join("");

    // num of spaces
    let spaces;
    i === nFloors ? (spaces = 1) : (spaces = nFloors - i);
    const spaceArr = new Array(spaces).fill(" ").join("");
    if (i === nFloors) {
      tower.push(`${row}`);
    } else {
      tower.push(`${spaceArr}${row}${spaceArr}`);
    }
  }
  return tower;
}

// GOOD TO KNOW: console.log("9".repeat(10)) // str.repeat()

// console.log(towerBuilder(6));

/* Another good answer: 
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

*/

////////////////////////////////////
// 9)

function century(year) {
  if (year < 100) return 1;

  const cent = year / 100;

  if (Number.isInteger(cent)) {
    return cent;
  } else {
    return Math.floor(cent) + 1;
  }
}

// ONE LINER: const century = year => Math.ceil(year/100)

// console.log(century(89))
// console.log(century(1705))
// console.log(century(1900))

////////////////////////////////////
// 10)

function order(words) {
  const strArr = words.split(" ");
  let order = new Array(strArr.length).fill(0);
  for (let i = 0; i < strArr.length; i++) {
    const sorted = strArr[i].split("").sort();
    console.log(`TRUE: ${sorted[0]}, ${i}`);
    order[sorted[0] - 1] = strArr[i];
  }
  return order.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));

///////////////////////////////////
// 11 RegEx for 4 or 6 number pin

function validatePIN(pin) {
  //if( /\b^[0-9]{4}\b/.test(pin)  || /\b^[0-9]{6}\b/.test(pin) ){
  if (/^\d{4}$/.test(pin) || /^\d{6}$/.test(pin)) {
    if (Number.isInteger(parseFloat(pin))) {
      return true;
    }
  }
  return false;
}
console.log(validatePIN("123456"));
//
