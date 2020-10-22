



// Callbacks _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
]
  // SYNCHRONOUS 
    // function createPost(post){
    //   setTimeout(()=>{
    //     posts.push(post)
    //   }, 2000)
    // }

    // function getPosts(){
    //   setTimeout(()=>{
    //     let output = '';
    //     posts.forEach((post)=>{
    //       output += `<li>${post.title}</li>`
    //     });
    //     document.body.innerHTML = output;
    //   },1000)
    // }


    // createPost({title:'Post Three', body: 'This is post three'});
    // getPosts();


// ASYNCHRONOUS 

  function createPost(post, callback){
      setTimeout(()=>{
        posts.push(post)
        callback();
      }, 2000)
    }

    function getPosts(){
      setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
          output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
      },1000)
    }

createPost({title:'Post Three', body: 'This is post three'},getPosts);






// Data from an External API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

// API, a structure agreement/way of commmunicating between 2 parties, usually through a structured request and a structured response. 

// REST API : Representational State Transfer 
  /*
    - architectural style for designing networked applications
    - Relies on a stateless, cliet-server protocol, almost always HTTP
    - Treats server objects as resources that can be created or destroyed (CRUD)
    - Can be used by virtuall any programming langauge 
    - All API's have their own rules and structure
  */



// Data from an External API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

// Add Event listener
  /*
    document.querySelector('.get-jokes').addEventListener('click', getJokes);

    function getJokes(e){
      const number = document.querySelector('input[type = number').value;
      const xhr = new XMLHttpRequest();

      xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
      
      xhr.onload = function(){
        if(this.status === 200){
          const response = JSON.parse(this.responseText);

          let output = '';

          if(response.type = 'success'){
              response.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`
              })
          } else {
            output += `<li>Something went wrong...</li>`
          }
          document.querySelector('.jokes').innerHTML =output;
        }
      }
      
      xhr.send();
      e.preventDefault();
    }

    */



// FROM AJAX and JSON SECTION _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

/*
  // Add event listeners
  document.getElementById('button1').addEventListener('click', loadCustomer)
  document.getElementById('button2').addEventListener('click', loadCustomers)

  // Load Single Customer
  function loadCustomer(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function(){
      if(this.status === 200){
        const customer = JSON.parse(this.responseText);
        const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>`
        document.getElementById('customer').innerHTML = output;
      }
    }
    xhr.send();
  }


  // Load Customers
  function loadCustomers(){
   // xhr object 
    const xhr  = new XMLHttpRequest();
   // xhr open 
    xhr.open('GET','customers.json', true);
   // xhr onload
   xhr.onload = function(){
     if(this.status === 200){
        const customers = JSON.parse(this.responseText)
      let output = '';
      customers.forEach((customer=>{
      output  += `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>
      `
      }))
      document.getElementById('customers').innerHTML = output;
     }
   }


   // xhr send
   xhr.send();
  }


*/
// FROM XHR OBJECT SECTION _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

// Add event listener
/*
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  
  // Instantiate XHR object
  const xhr = new XMLHttpRequest();
  //XHR open
  xhr.open('GET','data.txt',true)
  //XHR onload
  xhr.onload = function(){
    if(this.status === 200){
      const text = this.responseText;

      // Get UI output
      const output = document.getElementById('output');
      // Create element to be appended to Output
      const resText = document.createElement('p');
      // Add text to new element
      resText.textContent = this.responseText;
      
      output.appendChild(resText);

    }
  }
  xhr.send()
}

*/