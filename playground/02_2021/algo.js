/* COUNT BITS
const countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((val) => val === "1").length;
};

console.log(countBits(1234));
*/
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/* NUMBER OF LIKES

    function likes(names) {
      // TODO
      return names.length === 0
        ? "no one likes this"
        : names.length === 1
        ? `${names[0]} likes this`
        : names.length === 2
        ? `${names[0]} and ${names[1]} like this`
        : names.length === 3
        ? `${names[0]}, ${names[1]}, ${names[2]} like this`
        : `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`;
    }

    console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
*/

/*  SUM OF TWO SMALLEST NUMBERS
      function sumTwoSmallestNumbers(numbers) {
        const smallestNum = numbers.sort((a, b) => a - b)[0];
        const nextSmallestNum = numbers.sort((a, b) => a - b)[1];
        return smallestNum + nextSmallestNum;
      }
      console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
*/

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/* GIVEN A TRIANGLE, SUM OF "N" ROW NUMBERS
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
*/

//FOR LOOP
/*
function rowSumOddNumbers(n) {
  let count = 1;
  let rowSum = 0;
  for (i = 0; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      i === n && (rowSum += count);
      count += 2;
    }
  }
  return rowSum;
}
*/

// USING sum of the nth line of odd numbers: n^3
/*
    function rowSumOddNumbers(n) {
      return n * n * n;
    }
*/
//  console.log(rowSumOddNumbers(42));

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// FIND NEXT PERFECT SQUARE:
/*
    function findNextSquare(sq) {
      const originalNum = Math.sqrt(sq);
      return Number.isInteger(originalNum) ? Math.pow(originalNum + 1, 2) : -1;
    }

    console.log(findNextSquare(121));
    console.log(findNextSquare(114));
*/

///////////////////////////////////////////////////////////////
/*
      function narcissistic(value) {
        // Code me to return true or false

        const numArr = value.toString().split("");
        const valLength = numArr.length;
        let powSum = numArr
          .map((val) => Math.pow(val, valLength))
          .reduce((a, b) => a + b);

        return powSum === value;
      }

      console.log(narcissistic(7));
      console.log(narcissistic(371));
*/

///////////////////////////////////////////////////////////////
// COUNT OF DUPLICATE CHARACTERS

/*
    const str = "aBBa12Ddm"; // answer:

    function duplicateCount(text) {
      const strArr = [...text].sort().map((val) => val.toLowerCase());
      const arr1 = [];
      const arr2 = [];
      strArr.map((val) => {
        arr1.indexOf(val) == -1
          ? arr1.push(val)
          : arr2.indexOf(val) == -1
          ? arr2.push(val)
          : "";
      });
      return arr2.length;
    }

    console.log(duplicateCount("indivisibility"));
    console.log(duplicateCount("indivisibilities"));
*/

// UNIQUE IN ORDER

/*
    TESTS:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

////////////////////////////////////////////////

/*
    var uniqueInOrder = function (iterable) {
      //your code here - remember iterable can be a string or an array
      let first = [];
      let uniqueInOrderArr = [];
      let strArr = [...iterable];
      for (i = 0; i <= strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) !== strArr.indexOf(strArr[i + 1])) {
          first.push(strArr[i]);
        } else {
          uniqueInOrderArr.push(strArr[i]);
        }
      }
      return first;
    };

    console.log(uniqueInOrder("AAAABBBCCDAABBB"));
    console.log(uniqueInOrder([1, 2, 2, 3, 3]));
    console.log(uniqueInOrder("ABBCcAD"));

*/

////////////////////////////////////////////////
/*
    function songDecoder(song) {
      return song.split("WUB").filter((val) => val);
    }

    console.log(songDecoder("AWUBBWUBC"));
    console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
    console.log(songDecoder("WUBAWUBBWUBCWUB"));

*/

////////////////////////////////////////////////
/*
    //Number persistance:
     
    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                            // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number
  
    */
/*
      function persistence(num) {
        let numArr = num.toString().split("");
        let count = 0;
        while (numArr.length > 1) {
          numArr.map((val) => parseInt(val));
          const nextNum = numArr.reduce((product, nextVal) => product * nextVal);
          numArr = nextNum.toString().split("");
          count++;
        }
        return count;
      }

      console.log(persistence(39));
      console.log(persistence(4));
      console.log(persistence(25));
      console.log(persistence(999));
      // good resource: https://dev.to/vadims4/persistence-algorithm-and-a-simple-introduction-to-reduce-1pn2
*/
////////////////////////////////////////////////
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
/*
 function createPhoneNumber(numbers) {
   return `(${numbers.slice(0, 3).join("")}) ${numbers
     .slice(3, 6)
     .join("")}-${numbers.slice(6).join("")}`;
 }
*/

////////////////////////////////////////////////
/*
const re = /^\d*[13579]$/;
// const re = /^\d*[t]$/;

*/

function sortArray(array) {
  // Return a sorted array.
  // odd regEx means:
  /*
      -  ^-?\d*  : can start with a "-" (negative integer), a numerical boundary of any legth
      - [13579]$  :  ends in an odd number
    */
  const reOdd = /^-?\d*[13579]$/;
  const reEven = /^-?\d*[02468]$/;

  const ordered = array.filter((num) => reOdd.test(num)).sort((a, b) => a - b);

  const oddOrdered = [0, ...ordered];

  return array.map((val) => {
    if (reOdd.test(val)) {
      oddOrdered.shift();
      return oddOrdered[0];
    } else {
      return val;
    }
  });

  // BETTER ANSWER:
  /*
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
  */
}

// const arr1 = [1, 3, 2, 8, 5, 4];
// const arr2 = [1, 3, 5, 8, 0];

// console.log(sortArray(arr1));
// console.log(sortArray(arr2));

////////////////////////////////////////////////////////////////////////////////////////////////
//  THINK ABOUT BASE CASES, RECURSION,
// OBSERVED PIN

/*
          function getPINs(observed) {
            const possibilities = {
              1: ["1", "2", "4"],
              2: ["2", "1", "3", "5"],
              3: ["3", "2", "6"],
              4: ["4", "1", "5", "7"],
              5: ["5", "2", "4", "6", "8"],
              6: ["6", "3", "5", "9"],
              7: ["7", "4", "8"],
              8: ["8", "0", "5", "7", "9"],
              9: ["9", "6", "8"],
              0: ["8"],
            };
            if (!observed || observed.length === 0) return [];
            if (observed.length === 1) return possibilities[observed];

            const pinCombos = [];
            const firstDigits = observed.slice(0, observed.length - 1);
            const lastDigit = observed.slice(observed.length - 1);

            getPINs(firstDigits).forEach((oldCombo) => {
              possibilities[lastDigit].forEach((newNum) => {
                pinCombos.push(oldCombo + newNum);
              });
            });

            return pinCombos;
          }
          console.log(getPINs("369"));
          const testArr = "1234";
          console.log(testArr.slice(0, testArr.length - 1).forEach((val) => val + 1));
*/
/*                                                    : 369
  getPINs(firstDigits).forEach((oldCombo) => {          (69).forEach(char)
    possibilities[lastDigit].forEach((newNum) => {
      pinCombos.push(oldCombo + newNum);
     });
  });
*/

////////////////////////////////////////////////////////////////////////////////////////////////
/*
            function formatDuration(seconds) {
              if (seconds === 0) return "now";
              if (seconds === 1) return "1 second";
              if (seconds < 60) return `${seconds} seconds`;

              const duration = [];
              let count = seconds;

              while (seconds >= 0) {
                if (count > 31536000) {
                  count = count / 31536000;
                  duration.push();
                }
                if (count > 86400) {
                  count = count / 86400;
                }

                if (count > 3600) {
                  count = count / 3600;
                }

                if (count > 60) {
                  count = count / 60;
                }
              }

              return duration;
            }

            console.log(62 / 60);
*/
/*
          function formatDuration(seconds) {
            if (seconds === 0) {
              return "now";
            }
            const numYears = Math.floor(seconds / (86400 * 365));
            const numDays = Math.floor((seconds % (86400 * 365)) / 86400);
            const numHours = Math.floor(((seconds % (86400 * 365)) % 86400) / 3600);
            const numMinutes = Math.floor(
              (((seconds % (86400 * 365)) % 86400) % 3600) / 60
            );
            const numSeconds = (((seconds % (86400 * 365)) % 86400) % 3600) % 60;

            const secondsFun = function () {
              return numSeconds
                ? (seconds > 60
                    ? " and " + numSeconds + " second"
                    : +numSeconds + " second") + (numSeconds === 1 ? "" : "s")
                : "";
            };

            const minutesFun = function () {
              if (numSeconds === 0 && numDays !== 0) {
                return (
                  "and " +
                  (numMinutes
                    ? numMinutes + " minute" + (numMinutes === 1 ? "" : "s")
                    : "")
                );
              }
              return numMinutes
                ? numMinutes + " minute" + (numMinutes === 1 ? "" : "s")
                : "";
            };

            const hoursFun = function () {
              if (minutesFun().length === 0) {
                return numHours ? numHours + " hour" + (numHours === 1 ? "" : "s") : "";
              }
              if (minutesFun().charAt(0) === "a") {
                return numHours ? numHours + " hour" + (numHours === 1 ? " " : "s ") : "";
              }
              if (numSeconds === 0 && numMinutes === 0) {
                return numHours ? numHours + " hour" + (numHours === 1 ? "" : "s") : "";
              }

              return numHours ? numHours + " hour" + (numHours === 1 ? ", " : "s, ") : "";
            };

            const daysFun = function () {
              return numDays ? numDays + " day" + (numDays === 1 ? ", " : "s, ") : "";
            };

            const yearsFun = function () {
              return numYears ? numYears + " year" + (numYears === 1 ? ", " : "s, ") : "";
            };

            return yearsFun() + daysFun() + hoursFun() + minutesFun() + secondsFun();
          }

          console.log(formatDuration(0)); // returns "1 hour, 1 minute and 2 seconds"
          console.log(formatDuration(3622)); // returns "1 hour, 1 minute and 2 seconds"
          console.log(formatDuration(3600)); // returns "1 hour, 1 minute and 2 seconds"
*/
// Other Solutions
/*      
        function formatDuration (seconds) {
          var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
              res = [];

          if (seconds === 0) return 'now';
          
          for (var key in time) {
            if (seconds >= time[key]) {
              var val = Math.floor(seconds/time[key]);
              res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
              seconds = seconds % time[key];
            }
          }
        
          return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
        }
*/
/*
  function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
}     
*/
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// regEx: You need to write regex that will validate a password to make sure it meets the following criteria:

//solution:

function validate(password) {
  return /[a-zA-Z]{6,}/.test(password);

  //return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}

// Explanation:
/*
  - [a-zA-Z\d]{6,}$  : refers to the minimum length of 6 of both upperCase and lowerCase chars.
                     : the \d refers to any numeral (equivelent to [0-9])
  
  - (?=.*\d)      : 
  - (?=.*[A-Z])   :
  - (?=.*[a-z])   :

*/

console.log(validate("1234"));
console.log(validate("passwordTest"));
