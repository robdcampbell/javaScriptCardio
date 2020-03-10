


/// Things to consider/practice/burn into memory:
    // reduce()       --- combines all array items to create one total value
    // map()          --- returns a new array, with 'edit' applied to each array item
    // substring()    --- 1 Arg: will return 'rest' of string from index provided in args 
    // replace()      --- 
    // for(x in y)    --- used to loop through an Object (not an array)
    // for (x of y)   --- used to loop through an Array  


// CARDIO:

// Capitalize first letter of each word in a string

function capitalize(str){
    // let strArr = str.split(' ');
    // return strArr.map(val => val[0].toUpperCase() + val.substring(1).toLowerCase()).join(' ');

       // OR 
       return str
         .toLowerCase()
         .split(' ')
         .map(val => val[0].toUpperCase() + val.substring(1))
         .join(' ');

         // or  regular expressions
        //  return str.replace(/\b[a-z]/gi/, function(char){
        //      return char.toUpperCase();
        //  })

}
// console.log(capitalize('test! This is a test tEsT TEST')); 


// Max character
function maxCharacter(str){
<<<<<<< HEAD
    const charMap = {};
    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    });
    

=======
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char){
    if(charMap[char]) {
        charMap[char]++;
    } else {
        charMap[char] = 1;
    }
  })
  //console.log(charMap)

  for (let char in charMap){
    if(charMap[char] > maxNum){
        maxNum = charMap[char];
        maxChar = char;
    }
  }

  return maxChar;
>>>>>>> 9d43de351edda9c747ab9489f1eb8978af600869

}


// Call Function
const output = maxCharacter('javascripttttttt');

//console.log(maxCharacter(output));



// FIZZBUZZ

function fizzBuzz(){
 for(let i = 1; i <= 100; i++){
    if( i % 3 === 0 && i % 5===0 ){
        console.log(`${i} fizzbuzz!`)
    } else if(i%3 === 0){
        console.log('3, fizz')
    } else if(i%5===0){
        console.log('5, buzz');
    }
 } 
}

fizzBuzz()

console.log(15%3);