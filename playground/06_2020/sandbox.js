

function XO(str){

   return [(str.match(/x/gi)), (str.match(/o/gi))];
}

let str = 'xoOxXXooofawefeafadsfas3242r324Xo';
let willWork = 'xxxooo'
let numbers = '1324234w3452q435'

console.log(XO(str));
console.log(XO(willWork));
console.log(XO("zzoo"));
console.log(XO("234234234oo"));
