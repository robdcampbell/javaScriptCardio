//   Look at Math.min and Math.max with the spread operator
        // function difference(nums) {
        // 	return Math.max(...nums) - Math.min(...nums)
        // }

    //diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
        // Smallest number is -50, biggest is 32.



// 1)  Math.min() and Math.max() examples!
        // const arr = [10,4, 1, 4, -10, -50, 32, 21];
        
        // const max = Math.max(...arr);
        // const min = Math.min(...arr);

        // console.log(max-min);

// 2)  Rest and Spread operators
        const arr1 = [1,2,3,4]
        const arr2 = [5,6,7,8];

        // CONCATENATE 
        const combinedArr = [...arr1,...arr2];

        console.log(combinedArr);

    

// 3)   .every()

    // example: 
        //arr.every(val => val <40 )

    // 
        // function checkAllEven(arr) {
        //     return arr.every(x=> x % 2 === 0)
        // }
  
  