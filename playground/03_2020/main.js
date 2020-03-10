console.log('Also a test')

const string = 'This is a string';


// 01) __________________________

//Reverse a string; (array methods, for/forEach, recursion)
function reverseStr(str){
    //Array methods
        // let strArr = Array.from(str).reverse().join('');
        // return strArr;
    
    // For/forEach

        // For Loop
            // let revStr = '';
            // for(i = str.length-1; i >= 0 ; i--){
            //     revStr += str[i];
            // }
            // return revStr;
    
        // forEach
            // let strArr = Array.from(str);
            // let newStr = '';
            // strArr.forEach((char)=> {
            //     newStr = char + newStr;
            // })
            // return newStr;

    // RECURSION

    } // reverseStr function 

    // RECURSION REVERSE
    const recursionReverse = function(string) {
        if (string === "") {
          return "";
        } else {
        // recursive function is calling on a sub-problem
          return recursionReverse(string.substr(1)) + string.charAt(0);
        }
      }

console.log(recursionReverse(string));
//console.log(reverseStr(string));


// 02) __________________________