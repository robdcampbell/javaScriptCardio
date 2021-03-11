
// Easy Exersices 

//  1)
    // negate the Array of numbers
        // // ex: negate([1,2,3,4])  -> [-1,-2,-3,-4]
        // //     negate([-1,2,-3,4]) -> [1,-2,3,4]

        // const arr =[1,2,3];
        // console.log(arr.map(val=>val*-1));

// 2) Create a function to multiply all of the values in an array by the amount of values in the given array.

        // multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
        // multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
        // multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
        // multiplyByLength([0]) ➞ ([0])

            // function multiplyByLength(arr){
            //     return arr.map(val=>val*arr.length);
            // }

            // const arr = [2,3,1,0];
            // console.log(multiplyByLength(arr));

// 3) Create a function that takes a string and returns the word count. The string will be a sentence.

    // MY SOLUTION
        // function countWords(str){
        //     return str.split(' ').length;
        // }

        // console.log(countWords('this is a test'));
        // console.log(countWords('what an easy task, right?'));

// 4)   Find the largest number in an Array
    
        // MY SOLUTION
            // function largestNum(arr){
            //     const ordered = arr.sort((a,b)=>b-a)[0];
            // }
            // const arr = [1,3,5,6,3,2,45,34535,6,7]
        
        //OTHER POSSIBILITIES
        // Built-in Math method:
            // console.log(Math.max(...arr)); 

        //Built-in Array Method:
            //console.log(arr.sort((a,b)=>b-a)[0]);

        // For Loop:
            // function findLargestNum(arr) {
            //     var max = arr[0];
            //     for(var i = 1; i < arr.length; i++) {
            //     if(max < arr[i]) {
            //         max = arr[i];
            //     }
            //     }
            //     return max;
            // }

// 5)  Create a function that takes an array of numbers and return the first and last elements as a new array.

        //Examples:

        // firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

        // firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

        // firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

        // My answer: 

        function firstLast(arr){
            const newArr = [];
            newArr.push(arr[0]);
            newArr.push(arr[arr.length-1]);
            return newArr;
        }

        // OTHER ANSWERS:
        
        // Shift and Pop
            // function firstLast(arr) {
            //     return [arr.shift(), arr.pop()]
            // }
        
        // Similar to mine
                // function firstLast(arr) {
                //     return [arr[0], arr[arr.length-1]];
                // }
        
        // Spread/Rest Operator
            //const firstLast = ([first, ...rest]) => [first, rest.pop()];
        

        console.log(firstLast([5,10,15,25]))
