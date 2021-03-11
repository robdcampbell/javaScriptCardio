

// async function myFunc(){
//   //return 'Hello';

//   const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('Hello'),1000)
//   })

//   const res = await promise; // Wait until promise is resolved 
//   return res;
// }

// myFunc()
// .then(res=>console.log(res));


async function getUsers(){
  // Await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // Only proceed once the fetch promise is resolved
  const data = response.json();
  // Only proceed once th second promise is resolved
  return data;
}

getUsers()
.then(users => console.log(users))
.catch(err=>console.log(err));