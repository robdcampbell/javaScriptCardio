// WORKING WITH JSON

// Practice with local JSON Files
        // //Global Vars
        // const getCustomer = document.querySelector("#button1");
        // const getCustomers = document.querySelector("#button2");
        // const customerOutput = document.querySelector("#customer");
        // const customersOutput = document.querySelector("#customers");

        // // Load event listeners
        // loadEventListners();

        // // Load Event Listeners function 
        // function loadEventListners(){
        //   getCustomer.addEventListener('click',loadCustomer);
        //   getCustomers.addEventListener('click',loadCustomers);
        // } 


        // // Functions
        // // Load single customer
        // function loadCustomer(e){
        //   const xhr = new XMLHttpRequest();
        //   xhr.open('GET','./playground/customer.json',true);
        //   xhr.onload = function(){
        //     if(this.status === 200){
        //       console.log(this.responseText);
        //       const customer = JSON.parse(this.responseText);
        //       customerOutput.innerHTML = `
        //         <li>ID: ${customer.id}</li>
        //         <li>Name: ${customer.name}</li>
        //         <li>Company: ${customer.company}</li>
        //         <li>Phone: ${customer.phone}</li>
        //       `
        //     }
        //   }
        //   xhr.send();
        // }

        // // Load Customers
        // function loadCustomers(e){
        //   const xhr = new XMLHttpRequest();
        //   xhr.open('GET','./playground/customers.json',true);

        //   xhr.onload = function(){
        //     if(this.status === 200){
        //       //console.log(this.responseText);
              
        //       // Parse the JSON Data
        //       const customers = JSON.parse(this.responseText);

        //       let output = '';
              
        //       customers.forEach((customer)=>{
        //        output += `
        //         <ul>
        //           <li>ID: ${customer.id}</li>
        //           <li>Name: ${customer.name}</li>
        //           <li>Company: ${customer.company}</li>
        //           <li>Phone: ${customer.phone}</li>
        //         </ul>
        //       `
        //       })
              
        //       customersOutput.innerHTML = output;
        //     } 
        //   };

        //   xhr.send();
        // }


        // //Retreive data using XHR -- from data.txt

        // // function getData(e){
        // //   const xhr = new XMLHttpRequest();
        // //   xhr.open('GET','./playground/data.txt',true);
        // //   xhr.onload = function(){
        // //     if(this.status === 200){
        // //       console.log(this.responseText);
        // //       output.innerHTML = `<li>${this.responseText}</li>`;
        // //     }
        // //   }

        // // // Optional - Used for spinners/loaders
        // // xhr.onprogress = function(){

        // // }

        // // //   // readyState Values - 
        // // //   // 0: request not intialized
        // // //   // 1: server connection established
        // // //   // 2: request received 
        // // //   // 3: processing request 
        // // //   // 4: request finished and response is ready

        // // //   //HTTP STATUSES:
        // // //   // 200: 'OK'
        // // //   // 403: 'Forbidden' 
        // // //   // 404: 'Not Found'

        // //   //ON ERROR
        // //   xhr.onerror = function(){
        // //     console.log('Request error...');
        // //   };

        // //   xhr.send();
        // // }

// Practice with External API (CHUCK NORRIS JOKES)
// Global Variables

const jokeOutput = document.querySelector('.jokes');

document.querySelector(".get-jokes").addEventListener('click',getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload = function(){
    let output = '';
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      const responseArr = response.value;
      let output = '';

      responseArr.forEach((joke)=>{
        output += `
          <li>#${joke.id}: ${joke.joke}</li>
        `
      })
      jokeOutput.innerHTML = output;
      }
      
    }  
    
  
  xhr.send();
  e.preventDefault();
}
