// REDUCE, DOM MANIPULATION, DATE METHODS, SORT

// // Working with reduce:

// const arr = [1,2,3,4,5,6];

// const addAll = arr.reduce((a,c)=> a*c);

// console.log(addAll);



     // DOM Manipulation Practice (REMOVING AN ITEM FROM THE DOM); 

                function setup() {
                    // Write your code here.
                    
                    //Event Listeners
                    document.addEventListener('click', removeImage);

                    function removeImage(e){
                        if(e.target.classList.contains('remove')){
                            //console.log(e.target);
                            e.target.parentElement.remove();
                        }
                    }



                    
                }
                
                // Example case. 
                document.body.innerHTML = `
                
                <div class="image">
                    <img src="https://goo.gl/kjzfbE" alt="First">
                    <button class="remove">X</button>
                </div>
                
                <div class="image">
                    <img src="https://goo.gl/d2JncW" alt="Second">
                    <button class="remove">X</button>
                </div>`;
                
                setup();
                
                //document.getElementsByClassName("remove")[0].click();
                console.log(document.body.innerHTML);

                // //Global Vars
                    // const container = document.querySelector('body');

                    // // Event Listener    
                    // container.addEventListener('click',removeImage);

                    // function removeImage(e){
                    //   //console.log(e.target.classList.contains('remove'));
                    //     if(e.target.classList.contains('remove')){
                    //        e.target.parentElement.remove();
                    //     }
                    // }


    // function formatDate(userDate) {
    // // format from M/D/YYYY to YYYYMMDD
    //     const arr = userDate.split('/');
    //     const newDay = arr[1] <10 ? (arr[1] = '0'+arr[1]) : arr[1];
    //     const newMonth = arr[0] <10 ? (arr[0] = '0'+arr[0]) : arr[0];
   

    //     return newArr = arr[2].concat(newDay.concat(newMonth));
    // }
    
    // console.log(formatDate("12/31/2014"));
    // console.log(formatDate("1/3/2014"));

    console.log('a'<'b');
    const a = 'a';

    console.log(a.charCodeAt(0));

