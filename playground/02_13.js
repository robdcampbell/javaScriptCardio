const companies = [
    {name: 'Company One', type: 'retail' },
    {name: 'Company Two', type: 'auto' },
    {name: 'Company Three', type: 'retail' },
    {name: 'Company Four', type: 'packaging' },
    {name: 'Company Five', type: 'auto' },
    {name: 'Company Six', type: 'food' },
    {name: 'Company Seven', type: 'alcohol' }
  ]

const getKeys = '';
const retailType = companies.filter((company)=> company.type === 'auto');
//console.log(retailType);


// RECURSION //

// EXAMPLES

// ADDING NUMBERS

        // let add = function(n){
        //   if(n<=0){
        //     return 0;
        //   } else{
        //     return n+ add(n-1);
        //   }
        // }

        // -> explained 
        // let add = function(n){
        //   if(n<=0){
        //     return 0;
        //   } else{
        //     return n+ add(n-1); -> 3 + add(3-1), 2 + add(2-1), 1 + add(1-1)TERMINATES;
        //   }
        // }

        //console.log(add(3));

// FACTORIAL EXAMPLE: n!
  // essentially if "n" = 5, 5*4*3*2*1

  // function factorial(n){
  //   if(n === 1){
  //     return 1;
  //   } else {
  //     return n * factorial(n-1);
  //   }
  // }

  // console.log(factorial(3));

// REVERSING A STRING RECURSIVELY
      
    // VERSION 1:
          // console.log(string.substr(1)+string.charAt(0));

            // MAKES CALL STACK EXPLODE
          // function reverseString(str){
          //   if(str === '') {
          //     return '';
          //   } else {
          //     return reverseString(string.substr(1)+string.charAt(0));
          //   }
          // };

          // console.log(reverseString(string));

      // VERSION 2:

      const string = "Hello";

      // RANDOM EXAMPLE of difference between substr and substring
      //console.log(string);
      // console.log(string.substr(1,3));
      // console.log(string.substring(1,3));

      function reverse(str){
        if(str.length <= 1){
            return str;
        } else {
          return reverse(str.substr(1)) + str[0];
        }
      }

      console.log(reverse('hello'));

// PRACTICAL/USEFUL RECURSION
