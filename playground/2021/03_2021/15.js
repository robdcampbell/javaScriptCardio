// console.log("alright alright alright");

// function pyramid(balls) {
//   if (balls === 0) return 0;
//   if (balls === 1) return 1;

//   let levelArr = []
//   let totalCount = 0;
//   let level = 0;
//   let ballsCount = 1;

//   for (i = 0; ballsCount < balls; i++) {
//     ballsCount += level;
//     level++;
//   }
//   return level;
// }

// console.log(pyramid(3));
// console.log(pyramid(6));
// console.log(pyramid(10));
// console.log(pyramid(2211));

const seatExample = "ABCDEFG";

//console.log(seatExample.slice(0, -1));
// console.log(seatExample.slice(-1));
console.log(seatExample.charCodeAt(seatExample.length - 1));
console.log(seatExample[seatExample.length - 1]);
