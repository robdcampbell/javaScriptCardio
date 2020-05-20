//console.log('testing!')

function rollCall(name, age){
  console.log(`Hello, ${name}, are you ${age} years old?`);
};
rollCall('Rob','Like a Million')

//

const name = 'Rob';
function reverseStr(val){
      
    // 1) Built-in array methods
            //return Array.from(val).reverse().join('');
        // OR
            // return val.split('').reverse().join('');

    // 2) Looping
        //let reverse = '';
            // For loop
                // for(let i = 0; i < val.length; i++){
                //     reverse = val[i] + reverse;
                // }
        
            // For Each loop
                // let strArr = Array.from(val);
                // strArr.forEach(val => reverse = val + reverse);

        //return reverse;            
    
} // reverseStr Function 

//console.log(reverseStr('Pterodactyl'));


// 3) Recursion
   
    function reverseString2(str){
            if (str === ""){
                return "";
            } else { 
                return reverseString2(str.substr(1)) + str.charAt(0);
            }
    }

    console.log(reverseString2('hello'));


//console.log(reverseStr2('Pterodactyl'));
//




