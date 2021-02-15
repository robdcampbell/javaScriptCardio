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
