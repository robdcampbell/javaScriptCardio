

function closPract(val){

    const secretPassword = "secret"

    function getPass(){
        if(val === secretPassword){
            return " YOU'RE IN. "
        } else {
            return " NOT TODAY, BUDDY. "
        }
    }
    return getPass();
}

console.log(closPract('secrets'))