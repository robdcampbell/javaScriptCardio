var replaceElements = function (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.max(...arr.slice(i + 1));
  }
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
