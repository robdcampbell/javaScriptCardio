// console.log('Novembers almost over');


/*
  1. reverse a string
  2. Sort Alpabetically / Sort Numerically
  3. Palindrome
  4. Reverse an integer
  5.

*/




// 1)______________ Reverse a string


      //const exStr = 'Hello'

      // For loop
          //INCREMENT
            // function reverseStr(str){
            //   let revStr = '';

            //   for(i = 0; i <= str.length - 1; i++){
            //     revStr = str[i]+ revStr;
            //   }
            //   return revStr;
            // }

            // console.log(reverseStr(exStr));

      // For of
              // function reverseStr(str){
              //   let revStr = '';
              //   for(char of str){
              //       revStr = char + revStr;
              //   }
              //   return revStr;
              // }

              // console.log(reverseStr(exStr))

      // For Each
              // function reverseStr(str){
              //   let strArr = str.split('');
              //   let revStr = [];
              //   strArr.forEach(char => revStr.unshift(char))
              //   return revStr.join('');
              // }
              // console.log(reverseStr(exStr));

      // Array Method
          // function reverseStr(str){
          //   return str.split('').reverse().join('');
          // }
          // console.log(reverseStr(exStr));

      // Reduce
          // function reverseStr(str){
          //    return str.split('').reduce(function(revString,char){
          //     return char + revString;
          //    },'')
          // }
          // console.log(reverseStr(exStr));


          //REDUCE IN FURTHER DETAIL
              /* it will 'reduce' all the values of an array into one value.

              array.reduce((accumulator,currentValue)=>{
                return accumulator + currentValue;
              })

              */

          // Example with numbers: 
            // const numbers = ['a','b','c'];

            // // let total = 0;
            // // for(n of numbers){
            // //    total += n;
            // // }

            // let total = numbers.reduce((total,n) => {
            //     return total +=n ;
            // })

            // console.log(total);

            



 // 2)______________ Sort Alpha / Sort Numeric


  // Alphabetical 

          // const exArr = ['bear','cat','tazmanian devil', 'pterodactyl','aardvark','tarantula','emu']

          // function sortAlpha(arr){
          //   let sorted =  arr.sort();
          //   return sorted.map((val)=>{
          //     return val[0].toUpperCase() + val.substring(1);
          //   })

          // }

          // console.log(sortAlpha(exArr));

  // Numeric

            // const numbers = [34,5,7,3242,9,666,3];

            // function sortNum(arr){
            //     return arr.sort((a,b)=>{
            //       return a-b;
            //     })
            // }

            // console.log(sortNum(numbers));


// 3) __________________PLAINDROME ______________________________

        // function isPalindrome(str){
        //   let revStr = str.split('').reverse().join('');
        //   return revStr.toLowerCase() === str.toLowerCase();
        // }

        // console.log(isPalindrome('racecar'));
        // console.log(isPalindrome('NotAPalinrome'));


// 4) __________________ INTEGER ______________________________
        // 
        // function reverseInteger(int){
        //   let revStr = int.toString().split('').reverse().join('');
        //   return parseInt(revStr) * Math.sign(int);

        // }

        // console.log(reverseInteger(-987654321));

    
 // 5) __________ CAPITALIZE FIRST LETTER ____ __________________________
        function capitalize(str){
          let strArr = str.toLowerCase().split(' ');
          let capArr = strArr.map(val => val[0].toUpperCase() + val.substring(1)).join(' ');
          return capArr;
        
        }
        console.log(capitalize('ThiS iS a sEnTeNce'))
