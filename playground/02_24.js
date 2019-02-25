// ES6 Practice

// Using the spread operator 

const arr1 = ['a','b','c','d','e','f','g'];
const arr2 = ['h','i','j','k','l','m','n','o','p','q'];
const arr3 = ['r','s','t','u','v','w','x','y','z'];

const combined = [...arr1,...arr2,...arr3];

//console.log(combined);


// Using the rest operator 
function manyArgs(...args){
  return args.length;
};
//console.log(manyArgs(3,2,1,4,5,6,7,7,89,9,89789));


// Destructuring to extract array values as local variables
const arr = [3,4] 
// Using destructoring 
function getVals([a,b]) {
  console.log(`the 1st value is ${a}, the second is ${b}`);
};

console.log(getVals(arr));


// SORT in different ways
const arrExample = ['dog','cat','giraffe','sloth','iguana','hippo']; 

console.log(arrExample.sort()); // alphabetic (default)
console.log(arrExample.sort((a,b)=> a.length - b.length)); // string length
console.log(arrExample.sort((a,b)=>b.length - a.length));

