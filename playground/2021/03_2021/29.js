// Third Max LeetCode: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/

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
  return third_max != null ? third_max : max;
};

console.log(thirdMax([1, 2, -2147483648]));
