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


// RETURN THE FACTORIAL:_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

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


// Creating a range using .from() _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

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

// USING AN ARRAY.FROM TO CREATE A MAPPED ARRAY OR RANGE_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
			/*
			function range(num){
				return Array.from(Array(num),(e,i)=>i+1)
			}

			console.log(range(20)); // Will print a range from 1-20
			*/




// Using .every to test if both the value and the index or either Odd or even_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


	//const arr = [1,1,1,1,1,1,1,1,1,1]

//console.log(arr.every((num=>num)));
/*
		function allOdd(arr){
			return arr.map((num,i)=>
				num%2=== 0 && i%2=== 0? "Even": 'nope!')
		}

				const oddArr = [0];
				const mixed =  [1,3,5,9, 10, 11,13]

				console.log(allOdd(oddArr));
				console.log(allOdd(mixed));
*/

// TOTAL SUM OF BUDGETS_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

/*
		function getBudgets(objArr){
			return objArr.map(obj => obj['budget']).reduce((a,b)=>a+b);
				
				Object.entries()[0];
		}


		console.log(getBudgets([
			{ name: "John", age: 21, budget: 23000 },
			{ name: "Steve",  age: 32, budget: 40000 },
			{ name: "Martin",  age: 16, budget: 2700 }
		]))
*/


// ADDING SUFFIXES : CLOSURES _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

	/*
		EXAMPLES:
		add_ly = add_suffix("ly")

		add_ly("hopeless") ➞ "hopelessly"
		add_ly("total") ➞"totally"

		add_less = add_suffix("less")

		add_less("fear") ➞ "fearless"
		add_less("ruth") ➞ "ruthless"
	*/

	// Using Closures (Prefix, suffix):
		//MY ANSWER:
			/*
			function add_suffix(suffix) {
				return function(pre){
					return `${pre}${suffix}`;
				}
			}

			const firstWord = add_suffix('er')
			console.log(firstWord('Fast'));
			*/

// Remove Trailing and Leading Zeros _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _	

		// Math.abs(), Number(), 

		/*
		examples:
		removeLeadingTrailing("230.000") ➞ "230"

		removeLeadingTrailing("00402") ➞ "402"

		removeLeadingTrailing("03.1400") ➞ "3.14"

		removeLeadingTrailing("30") ➞ "30"
		*/

		//MY ANSWER
		/*
		function removeLeadingTrailing(n) {
			return Math.abs(Number(n));
		}

		console.log(removeLeadingTrailing("03.1400"))
		*/

//  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _	
//Count Ones in Binary Representation of Integer

	/*
		function countOnes(num){
			return num.toString(2).split('').filter(n=>n==='1').length;
		}

		console.log(countOnes(999));
	*/
//  Detect Browser from User Agent_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _	

/*
You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"

detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"

detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") ➞ "Internet Explorer"
*/


function detectBrowser(userAgent) {
	return (/Chrome/).test(userAgent) ? "Google Chrome"
				:(/Firefox/).test(userAgent) ? "Mozilla Firefox"
				:(/MSIE/).test(userAgent) 
				||(/Explorer/).test(userAgent) ? "Internet Explorer"
				: 0 ;
}

