
// 1)   Calculate profit

    //EXAMPLES
        // profit({
        //     costPrice: 32.67,
        //     sellPrice: 45.00,
        //     inventory: 1200
        //   }) ➞ 14796
        
        //   profit({
        //     costPrice: 225.89,
        //     sellPrice: 550.00,
        //     inventory: 100
        //   }) ➞ 32411
        
        //   profit({
        //     costPrice: 2.77,
        //     sellPrice: 7.95,
        //     inventory: 8500
        //   }) ➞ 44030

    // My Solution

    // function profit(info) {
    //     return Math.round((info.sellPrice - info.costPrice) * info.inventory);
    // }

    // console.log(profit({
    //     costPrice: 2.77,
    //     sellPrice: 7.95,
    //     inventory: 8500
    //   }));


//  2)  Replace the Vowels

      // EXAMPLES
        // replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

        // replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

        // replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"

    // My solution  (Using Map):
        // function replaceVowels(str,symbol){
        //         const vowels = ['a','e','i','o','u','y'];
        //         const strArr = str.split('');
        //         return strArr.map(val=>{
        //         if(vowels.indexOf(val) !== -1){
        //             return symbol;
        //         } else {
        //             return val;
        //         }
        //         }).join('');
        // }
    
      // console.log(replaceVowels("shakespeare", "*"))

    // My solution using the replace() method: BAD REGEX 
        // function replaceVowels(str,symbol){
        //     const regex = /a|e|i|o|u|y/gi;
        //     return str.replace(regex,symbol);
        // }
    
      //GOOD REGEX:
        // function replaceVowels(str, ch) {
        //     return str.replace(/[aeiouy]/gi, ch)
        // }
        
        // console.log(replaceVowels("shakespeare", "*"))

// 3)   Create a function that adds a string ending to each member in an array.

    //   function addEnding(arr,ending){
    //       return arr.map(val=>val+ending);
    //   }
    //   console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));

// 4) Promises IV: The Reject Callback
        // let promise = new Promise( (resolve,reject) => {
        // 	let animal = "cat"
        //   setTimeout(() => {
        // 		if(animal === "dog") {
        // 			resolve("It's a dog!")
        // 		} 
        // 	  if(animal !== "dog") {
        // 			reject("It's not a dog!");
        // 		}
        //   }, 1000)
        // })

// 5) Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements

        // Examples
        // getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

        // getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

        // getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

    // My Answer
    //   function getFillings(arr){
    //     return arr.slice(1,arr.length-1);
    //   }

    //   console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]));

    // //Better Answer
    // function getFillings(arr){
    //     return arr.slice(1,-1);
    // }
    
    // Using pop() and shift() methods
        // function getFillings(sandwich) {
        //     sandwich.pop();
        //     sandwich.shift();
        //     return sandwich;
        // }

// 6) Eliminate Odd Numbers within in Array
      // EXAMPLE
        // noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

        // noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

        // noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

    //My solution using filter
    //     function noOdds(arr){
    //         return arr.filter(val=>val%2==0);
    //     }   

    //    console.log(noOdds([718, 991, 449, 644, 380, 440]));



// Array assignment

const arr = [0,1,2,3,4];

arr[0] = 'new';
console.log(arr);
