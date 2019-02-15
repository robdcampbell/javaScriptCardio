// BASIC ALGORITHM PRACTICE

// TITLE CASING
            // function titleCase(str) {
            //     let arr = str.split(' ');
            //     const newCase = arr.map((word)=>{
            //         let wordFix = word.toLowerCase();
            //         return wordFix[0].toUpperCase() + wordFix.substring(1);
            //     });
            //     return newCase.join(' ');
            //   }
            
            //   console.log(titleCase("sHoRt AnD sToUt"));
  

// SLICE AND SPLICE
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let arrStart = arr2.slice(0,n); 
    let arrEnd = arr2.slice(n);
    console.log(arrStart);
    console.log(arrEnd);

    console.log(arr1);
    console.log(arr2);

    return arrStart.concat(arr1).concat(arrEnd)
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


  

