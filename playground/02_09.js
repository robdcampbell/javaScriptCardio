// *********** JSON Verification and Updating ********** //

// // Setup
// var collection = {
//   "2548": {
//     "album": "Slippery When Wet",
//     "artist": "Bon Jovi",
//     "tracks": [ 
//       "Let It Rock", 
//       "You Give Love a Bad Name" 
//     ]
//   },
//   "2468": {
//     "album": "1999",
//     "artist": "Prince",
//     "tracks": [ 
//       "1999", 
//       "Little Red Corvette" 
//     ]
//   },
//   "1245": {
//     "artist": "Robert Palmer",
//     "tracks": [ ]
//   },
//   "5439": {
//     "album": "ABBA Gold"
//   }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
  
//   if(prop === 'tracks'){
//     // Check from 'tracks' prop; 
//     collection[id][prop] ? collection[id][prop].push(value) : collection[id][prop] = [value];
//   } else{
//      // Update 'Prop' if it doesnt exist
//     collection[id][prop] ? collection[id][prop] : collection[id][prop] = value;
//   }

//   if(value === ''){
//     delete collection[id][prop];
//   }

 
// return collection;
// }

// // Alter values below to test your code
// //console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(2548, "tracks", ""));


// const pinkFloyd = {
//   "first" : {
//    " title": "Meddle",
//     "year": "1971"
//   },

//   "second" : {
//     "title": "Saucerfull of Secrets",
//     "year": "1968"
//   }
// }

// console.log(pinkFloyd["first"]);


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num)=>{
     num >0;
  });
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
