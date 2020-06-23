// type of 'null' -> string
// delete all elements in an array 
//

/*
const arrEx = [1,2,3,4]

arrEx.length = 0;
console.log(arrEx);


const [a, ...b,c] = [1,2,3,4,5,6];
console.log(`${a}, ${b}, and ${c}`);
*/

// How Many Vowels?

console.log('test');

function countVowels(str) {
	return str.split('').filter((char)=> char.match(/[aeiou]/gi)).length;
}

console.log(countVowels('feet'));