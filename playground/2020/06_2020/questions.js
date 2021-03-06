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
		/*

		function detectBrowser(userAgent) {
			return (/Chrome/).test(userAgent) ? "Google Chrome"
						:(/Firefox/).test(userAgent) ? "Mozilla Firefox"
						:(/MSIE/).test(userAgent) 
						||(/Explorer/).test(userAgent) ? "Internet Explorer"
						: 0 ;
		}
		*/

//  (Closures)_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
/*
Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared. 


*/
//example:
	/*
		function greetingMaker(salutation) {
			return function closure(name) {
			return salutation + ", " + name 	
			}
		}
	*/

// TEST:
	/*
		const greeting = greetingMaker("Hello")

		Test.assertEquals(greeting("James"), "Hello, James")
		Test.assertEquals(greeting("John"), "Hello, John")
		Test.assertEquals(greeting("Jacob"), "Hello, Jacob")
		Test.assertEquals(greeting("Joseph"), "Hello, Joseph")
	*/

	// CLEAR THE FOG: .replace(), .filter(), .match(), .test() _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

	/* // 	
	function clearFog(str) {
		return (/fog/).test(str) 
			? str.split('')
				.filter(char => !(/[fog]/gi).test(char))
				.join('')
			: "It's a clear day!";
	}
	*/

	/*
		//OTHER ANSWER:

		const clearFog = string => {
			return /[fog]/gi.test(string)
			? string.replace(/[fog]/gi, "")
			: "It's a clear day!";
		}
	*/

	//TESTS

	/*
	console.log(clearFog("sky")) // "It's a clear day!"

	console.log(clearFog("fogfogfffoooofftreesggfoogfog")) // "trees"
	
	console.log(clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog")) // "birdsandthebees"
	*/

//   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


//  for (let i = 0; i < 3; i++){
// 	 setTimeout(()=>{
// 		console.log(i);
// 	 },1000);
//  }


//   Enharmonic Equivalents_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


	// My Answer:
	/*
		function getEquivalent(note) {
			const arr = ['G','A','B','C','D','E','F','G'];
			return note[0] === 'G' && note[1] === '#'
						? 'Ab' 
						:note[0] === 'G' && note[1] === 'b'
						? 'F#'
						: note[1] === '#'
						? `${arr[arr.indexOf(note[0])+1]}b`
						: `${arr[arr.indexOf(note[0])-1]}#`	
		}
	*/

	//GOOD ANSWER USING AN OBJECT ISTEAD OF AN ARRAY

	/*
	const noteValues = {'C#': 'Db','D#': 'Eb','F#': 'Gb','G#': 'Ab','A#': 'Bb',  
	'Db': 'C#','Eb': 'D#','Gb': 'F#','Ab': 'G#','Bb': 'A#'}
	const getEquivalent = note => noteValues[note];
	*/


// Fibonacci Sequence_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

		/*
		Resources:
		-https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e	
		-https://www.mathsisfun.com/numbers/fibonacci-sequence.html
			
		*/

	// ACTUALLY FACTORIAL, NOT FIBONACCI
		/*
			function fibonacci(n) {
				if(n === 0){
					return 0;
				} else {
					return fibonacci(n-1) + n;
				}
			}
		*/
	// SEQUENCE IN AN ARRAY

			/*

			function fibonacci(n) {

				if (n===1) 
			{
				return [0,1];
			} 
			else 
			{
				let s = fibonacci(n - 1);
				s.push(s[s.length - 1] + s[s.length - 2]);
				console.log(s)
				return s;
			}
			
			}
			*/
		// Looping 
		
		/*
		function fibonacci(num){
			let a =1, b = 0, temp;

			for(let i = 1; i < num; i++){
				temp = a
				a = a+b;
				b = temp;
			}
			return a;
		}
		*/	
		

// console.log(fibonacci(14));


// Convert Year to Century _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// My Answer:
function centuryFromYear(year) {
	return Math.round((year%100) > 0 ? (year/100)+1 : (year/100));
}


// RegEx for validating date:_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

/* 
	TEST Cases: 
	assignment("12/1/1") ➞ false

	assignment("1234/12/01") ➞ true

	assignment("2012/1/1") ➞ false

	assignment("2012/01/07") ➞ true
*/

// My Answer:
	/*
	function assignment(d) {
		return d.search(/^(\d{4})\/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])$/) !== -1;
	}
	*/


// RegEx for validating date using GROUPS AND RANGES:_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

// RESOURCE: https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/#named-capture-groups

/*example:

let REGEXP = /(?<year>\d{4})\-(?<month>\d{2})\-(?<day>\d{2})/g

*/

//  TRICKY JS QUESTIONS _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// 1) -> what is the outcome of this console.log()?
	/*
		const x = [1,2,3];

		x[-1] = -1;

		console.log(x[x.indexOf(10000)]); 
		// My guess: -1, or error?
		// Answer = -1 (CORRECT!)
	*/

// 2) -> what will the return value be?
	/*
	const ary = [1,2,15,30,5,45,7];
	ary.sort()
	*/
	// My answer: [1,15,2,30,45,5,7];, because JS will sort as a string.
	// To sort in descending order: ary.sort((a,b)=>a>b)
	// To sort in ascending order: ary.sort((a,b)=>a<b)
	// Answer: (CORRECT)

// 3) -> what will the return value be?
		/*
		let i = Number.MIN_VALUE;

		console.log(i*i); // 0
		console.log(i+1); // 1
		console.log(i-1); // -1
		console.log(i/i); // 1
		*/

		// My Answer: 0 (not correct)
		// CORRECT: let i = Number.MIN_VALUE;

// 4) -> what will the return value be?
		
		//let x = [1,2,3] + [4,5,6];

		//console.log(x);
		// My Answer: [[1,2,3],[4,5,6]] 
		// Correct: "1,2,34,5,6" 

		// Because '+' works on strings and numbers, so if the object cannot convert to a number, it will most likely default to converting to a string (or throw an error). 

		//console.log([...[1,2,3],...[4,5,6]])
		//console.log([1,2,3].concat([4,5,6]));

// 5) -> what will the return value be?

		//console.log(555555555555555555) // 18, 5's
		// My Answer: 5555555555555556 // 14,5's and 6
		// CORRECT Answer: 555555555555555600 // 15,5's, 6,0,0
		// console.log(NUMBER.MAX_SAFE_INTEGER) -> can't go beyond this number, anything past this will convert to 0's

// 6) -> what will the return value be?
		/*
			(function(){
				let a = b = 100;
			})();

				//console.log(a); // error, undefined
			console.log(b); // 100
			console.log(a);
		*/
		/*
		The IIFE creates  a block scope, and therefore do not exist outside the function - however since 'b' was declared the way it was, it became a global variable. To prevent that, declare as follows:
			let b = 100;
			let a = b;  
		*/

// 6) -> what will the return value be?

		// console.log(NaN === NaN);

// My Answer: False, because in Javascript NaN compared to anyhting is always false - even comparing to itself. 


// 7) -> Difference between "let" and "var"

/* 
	My Answer: Scope. "Let" introduce in ES2015, and will be block scoped depending on where it is declared. Both "let" and "var" can be redefined, but will be block-scoped for "let" and function-scoped for "var".

	"var" variables will get hoisted while "let" variables will not get hoisted.

	EXAMPLE:

	let x = function(){

		if(true){
			var v = 2;
			let l = 1;
		}

		console.log(v); // will return '2', function-scoped

		console.log(l); //will return 'error', block scoped
	}
	x();
*/
		


// 8) -> Difference between "=="" and "==="
	/*
		Both are comparison operators.
		==, just compares value (converts both to string)
		===, is strict equality based on value and data type, i.e:
			5 == '5', returns true
			5 === '5', returns false
	*/

// 9) -> Difference between "let" and "const"
	/*
		"let" can be reassigned a new value, "const" cannot
		"const" can be modified (ex: push another value onto an array), just not re-assigned.
	*/

// 10) -> Difference between "null" and "undefined"
	/*
		Both represent an empty value
		null = nothing left
		undefined = nothing was ever there

		typeOf(undefined) === undefined
		typeOf(null) === Object
	*/

// 11) -> Use of Arrow functions

	/*
		- lexical this in object-assigned methods, etc...
	*/

// 12) What is prototypal inheritance
	/* 
		Every object has a property called prototype. 
		When you create other objects, newly created objs inherit the original object constructor. 
		*/

// 13) What is the difference between function declaration and function expression?



/*
	- - function declaration will be hoisted, function expression will not be. Because the expression is saved to variable, it will behave like a variable.


		function funcD(){
			console.log('function declaration')	
		};

		let funcE = function(){
			console.log('function expression')
		}

*/

// 14) What is a promise and why do we use it?
		/*
			When you want to make an Async call that has to wait for something to happen, and once it comes back, you throw a callBack function. (with the possibilty to nest more callbacks.)

			** easier readabilty with method chaining, and error handling 
		*/

// 15) Set Timeout (puzzle)
		/*
		setTimeout(function(){
			console.log('a)
		},0)
		console.log('b');
		console.log('c');

		answer = b,c, a (because of the event loop)
		*/

// 16) What is a closure and how do you use it?

		// 8:30 :https://www.youtube.com/watch?v=yo3MJPcVJc8
	
