// console.log('Novembers almost over');

// 1)______________ Reverse a string

      const exStr = 'Hello'

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



 // 2)______________ Sort Alpha / Sort Numeric