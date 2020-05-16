//console.log('testing!')

function rollCall(name, age){
  console.log(`Hello, ${name}, are you ${age} years old?`);
};
rollCall('Rob','Like a Million')

//

const name = 'Rob';
function reverseArr(val){
    
    // into an array, then array methods
        //return Array.from(val).reverse().join('');

    // Looping
        let reverse = '';
        for(let i = 0; i < val.length; i++){
            reverse = val[i] + reverse;
        }
    return reverse;
}
console.log(reverseArr('Pterodactyl'));

//


