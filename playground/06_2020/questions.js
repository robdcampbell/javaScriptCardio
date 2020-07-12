// type of 'null' -> string
// delete all elements in an array 
// How many vowels? (rexEx)

/*
const arrEx = [1,2,3,4]

arrEx.length = 0;
console.log(arrEx);


const [a, ...b,c] = [1,2,3,4,5,6];
console.log(`${a}, ${b}, and ${c}`);
*/

// How Many Vowels? _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	/*
		console.log('test');

		function countVowels(str) {
			return str.split('').filter((char)=> char.match(/[aeiou]/gi)).length;
		}
		console.log(countVowels('feet'));
	*/
// RegEx - quatifying elipses? _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

		// greedy and lazy quantifiers

		/*
const REGEXP = /\.{3,}/ig

console.log(('thissss...and that....').match(REGEXP));
		*/

// ADDING ALL THE CUBE'D NUMS IN AN ARRAY:

/* My answer:
function sumOfCubes(nums) {
	return nums.length === 0? 0 : nums.map((num)=> num**3).reduce((a,b)=> a+b);
}

// Short Answer, just reduce: 
	function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}

// OR
const sumOfCubes = nums => {
	return nums.reduce((sum, num) => {
		return sum + Math.pow(num,3);
	},0)
}


*/ 


// RETURN THE FACTORIAL:

/*Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

*/
	/*
		function factorial(int) {
			if(int === 1){
				return int;
			} else {
				return factorial(int-1) * int;
			}
		}


		//Short syntax:
		function factorial(int) {
			return int === 0 ? 1 : factorial(int-1) * int ;
		}

		console.log(factorial(3));
	*/


// Creating a range using .from()

/* 
const arrayOperation = (x, y, n) =>
	Array.from({length: y-x+1}, (_, i) => x+i).filter(v => !(v%n));

*/


// 2-layer array with Object.Keys() and Object.values()

/*
input object and create two arrays within the object array -  one for the keys and one for the values.
*/
		/*
		function keysAndValues(obj) {
			return [[...Object.keys(obj)],[...Object.values(obj)]];
		}
		*/

// USING AN ARRAY.FROM TO CREATE A MAPPED ARRAY OR RANGE
			/*
			function range(num){
				return Array.from(Array(num),(e,i)=>i+1)
			}

			console.log(range(20)); // Will print a range from 1-20
			*/

// Using .every to test if both the value and the index or either Odd or even


const arr = [1,1,1,1,1,1,1,1,1,1]

//console.log(arr.every((num=>num)));

function allOdd(arr){
	return arr.every(num=>num%2 !== 0);
}

const oddArr = [1,3,5,9,11,13];
const mixed =  [1,3,5,9, 10, 11,13]

console.log(allOdd(oddArr));
console.log(allOdd(mixed));