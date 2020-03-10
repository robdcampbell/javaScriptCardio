//*******    FILTER(), MAP(), REDUCE()  */

// filter()
// const arrOne =  [1,2,3,4,5]
// const moreThanThree = arrOne.filter((num) => num > 3);
// console.log(moreThanThree);  // will return the array [4,5]

// // map()
// const arrTwo = [2,4,6,8,10];
// const addTen = arrTwo.map((num) => num+10);
// console.log(addTen);  // Will return [12,14,16,18,20];

// // reduce()
// const arrThree = [5,6,7,8];
// const addTogether = arrThree.reduce((acc,cur) =>acc + cur);
// console.log(addTogether); // will return  26 (5+6+7+8) 
// // sort()



/* ****      rest operator *******/

// Example: 

//BEFORE USING REST
// const sum = (function() {
//   "use strict";
//   return function sum(x, y, z) {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// USING REST: 

// const sum = (function() {
//   "use strict";
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// const arr = [1,2,3,4,5,6,7,8,9];

// const sliced = arr.slice(4)

// console.log(arr);
// console.log(sliced);



// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // change code below this line
//   const resultDisplayArray = [
//     `<li>${arr[0]}</li>`,
//     `<li>${arr[1]}</li>`,
//     `<li>${arr[2]}</li>`
//   ];
   
//   const resDisArr = ()=> {arr.forEach((x)=>{
//       console.log( `<li>${x}</li>`);
//   })};
//   // change code above this line
//   resDisArr();
//   return resultDisplayArray;
// }



/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
// const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray);

// function makeList(arr) {
//   "use strict";

//   // change code below this line
//   const resultDisplayArray = [];
//   const resDisArr = ()=> {arr.forEach((x)=>{
//       resultDisplayArray.push(`<li>${x}</li>`);
//   })};
//   // change code above this line
//   resDisArr();
//   return resultDisplayArray;
//}


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(degrees){
      this.degrees = degrees;
    }

    get temperature(){
      return(5/9 * (this.degrees-32));
    }

    set temperature(updateTemp){
      this.degrees = updateTemp * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);