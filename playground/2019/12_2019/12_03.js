// indexOf()
// slice()
// replace()
// split()
// Number()
//  ARRAY STUFF:   pop(), push(), shift(), unshift()

// 


// const myString = 'Hello';
// const sub = myString.toLowerCase().replace('he','Ro');
// console.log(sub);

const myArr = ['Dogs', 'Cats', 'Emus', 'AArdvarks']

// myArr.pop()
// myArr.unshift('Pterodactyls')
myArr.push('Velociraptors')

console.log(myArr);

const emusIndex = myArr.indexOf('Emus');

console.log(myArr.splice(emusIndex,1));
console.log(myArr);


