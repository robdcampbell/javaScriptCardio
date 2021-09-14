console.log("Pterodactyls");

// Filter by data type: ////////////////////////////////////////////
//
const randomArr = [1, 3, 4, 5, "a", "b", "s"];
const removeNum = (arr) => {
  return arr.filter((v) => typeof v !== "number");
  //   return arr.filter((v) => typeof v !== "string");
  //   return arr.filter((v) => typeof v !== "boolean");
};
console.log(removeNum(randomArr));
