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

const REGEXP = /\.{3,}/ig

console.log(('thissss...and that....').match(REGEXP));

