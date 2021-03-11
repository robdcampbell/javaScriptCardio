// EASY HTTP using Promises/Fetch



const http = new EasyHTTP();

// Get Users
    // http.get('https://jsonplaceholder.typicode.com/users')
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoes@gmail.com'
}

// Create Users
  // http.post('https://jsonplaceholder.typicode.com/users', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err))  

// Update User
  // http.put('https://jsonplaceholder.typicode.com/users/7', data)
  // .then(data => console.log(data))
  // .catch(err => console.log(err)) 
  
// Delete User

  http.delete('https://jsonplaceholder.typicode.com/users/7')
  .then(data => console.log(data))
  .catch(err => console.log(err)) 