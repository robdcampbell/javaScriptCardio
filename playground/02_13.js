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

// REVERSING A STRING RECURSIVELY
const string= 'Hello';

console.log(string.substr(1)+string.charAt(0));

function reverseString(str){
  if(str === '') {
    return '';
  } else {
    return reverseString(string.substr(1)+string.charAt(0));
  }
};

console.log(reverseString(string));

// PRACTICAL/USEFUL RECURSION