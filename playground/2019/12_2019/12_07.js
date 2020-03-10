const myArr = ['cat','pterodactyl','dog','lizard']

function looping(arr,animal){

  for(i=0;i < arr.length; i++){
    if(arr[i]=== animal){
      console.log(`${animal} is in position ${i+1}`);
      break;
    } else {
      console.log('Not Yet!')
    }
  }
}


looping(myArr,'pterodactyl');

/*
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function

*/