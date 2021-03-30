// Third Max LeetCode: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max = -Infinity;
  let second_max = -Infinity;
  let third_max = -Infinity;

  for (i = 0; i < nums.length; i++) {
    // [1,2,-2147483648]

    if (max < nums[i]) {
      third_max = second_max;
      second_max = max;
      max = nums[i];
    } else if (second_max < nums[i] && max != nums[i]) {
      third_max = second_max;
      second_max = nums[i];
    } else if (
      third_max < nums[i] &&
      max !== nums[i] &&
      second_max !== nums[i]
    ) {
      third_max = nums[i];
    }
  }
  return third_max != -Infinity ? third_max : max;
};
// console.log(thirdMax([1, 2, -2147483648]));

/*
 ========================================================================
 ========================================================================
*/

var canFormArray = function (arr, pieces) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < pieces.length; j++) {
      if (arr[i] === pieces[j][0]) {
        newArr.push(pieces[j]);
      }
    }
  }

  return arr.toString() === newArr.flat(Infinity).toString();
};

console.log(canFormArray([85], [[85]]));
// [91,4,64,78]   ,  [[78],[4,64],[91]]
// canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]);
