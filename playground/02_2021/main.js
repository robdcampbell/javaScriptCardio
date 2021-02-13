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

function findNextSquare(sq) {
  const originalNum = Math.sqrt(sq);
  return Number.isInteger(originalNum) ? Math.pow(originalNum + 1, 2) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(114));
