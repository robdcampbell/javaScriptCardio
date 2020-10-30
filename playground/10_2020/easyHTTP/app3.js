
// Easy HTTP with the Async/Await Refactor

// Instatiate the EasyHTTP class
const http = new EasyHTTP();

//Get Users
    // http.get('https://jsonplaceholder.typicode.com/users')
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoes@gmail.com'
}

// Create Users (POST)
  // http.post('https://jsonplaceholder.typicode.com/users', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err))  

// Update User (PUT)
  // http.put('https://jsonplaceholder.typicode.com/users/9', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err)) 
  
// Delete User (DELETE)
  // http.delete('https://jsonplaceholder.typicode.com/users/7')
  // .then(data => console.log(data))
  // .catch(err => console.log(err)) 



