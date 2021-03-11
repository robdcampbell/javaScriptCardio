// Ongoing List of Questions

// ********************************************************************
// 1) add to the end of an array, add something to the beginning of an array

//push
let myArray = ["a", "b", "c", "d"];
//const addEnd = myArray.push("End");
// push will append something to the end of an array, and if returned will return the length of the array. * modifies original array
//* pop() returns the item that is removed from last index of the array
//console.log(myArray);
// unshift
//const addStart = myArray.unshift("Start");
// prepends a new item to the front of the array, and returns the length of the array. * modifies original array
// * shift() will return the item that is removed.
//console.log(myArray);
// using ES6
//console.log(myArray);
// start
//myArray = ["start", ...myArray];
//console.log(myArray);

//myArray = [...myArray, "end"];
//console.log(myArray);

//
//
// ******************************************************************** */
// PRIVATE VARIABLE, function scope
// 2)
/*
      const privateVariable = (pass) => {
        const private = "Secret Passcode!";

        return function () {
          return private;
        };
      };

      const getPrivateVariable = privateVariable();
      console.log(getPrivateVariable());
*/

// ********************************************************************
// 3)  What is the output here:

// LET AND CONST
/*
        let num = 4;
        const outer = () => {
          let num = 2;
          const inner = () => {
            num++;
            let num = 3;
            console.log(num);
          };
          inner();
        };
*/
/*
          var num = 4;
          function outer() {
            var num = 2;
            function inner() {
              num++;
              var num = 3;
              console.log(num);
            }
            inner();
          }
*/
//console.log(outer());

// ********************************************************************
// 4) What is the output? : console.log(typeof typeof 1);
// console.log(typeof typeof 1);

// ********************************************************************
// 5) What is the output?

var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;
// The above is fixed like this: var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity()); // return the function?
console.log(hero.getSecretIdentity()); // returns the identity
