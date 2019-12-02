


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
    const charMap = {};
    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    });
    


}


// Call Function
const output = maxCharacter('javascript');

console.log(maxCharacter());
