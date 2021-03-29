var replaceElements = function (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.max(...arr.slice(i + 1));
  }
  arr[arr.length - 1] = -1;
  return arr;
};
//console.log(replaceElements([17, 18, 5, 4, 6, 1]));

const arr = [1, 2, 2, 3, 69420, 5, 5, 6, 8, 9];

const newArr = new Set(arr);
console.log(newArr);

var findDisappearedNumbers = function (nums) {
  const missing = [];
  for (i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) {
      missing.push(i);
    }
  }
  return missing;
};

///
