let arr = [2, 4, 3];
let arr2 = [5, 6, 4];

// console.log(
//   Number(arr.toString().split(",").reverse().join("")) +
//     Number(arr2.toString().split(",").reverse().join(""))
// );

//console.log(Number(arr.reverse().join("")));

var addTwoNumbers = function (l1, l2) {
  const num1 = Number(l1.reverse().join(""));
  const num2 = Number(l2.reverse().join(""));
  return Number((num1 + num2).toString().split("").reverse().join(""));
  return Number((num1 + num2).toString().split("").reverse().join(""));
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
