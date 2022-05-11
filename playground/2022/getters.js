// Getters + Setters

let objTest = {
  _meal: "rissotto",
  _price: 19,
  //   get meal() {
  //     return `Here: ${this._meal}`;
  //   },
  set meal(mealToCheck) {
    this._meal = mealToCheck;
    return `Here: ${this._meal}`;
  },
};

objTest.meal = "Unicorn Farts";

console.log(objTest._meal);
