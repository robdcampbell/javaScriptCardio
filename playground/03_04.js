// WORKING WITH JSON

//Global Vars
const getCustomer = document.querySelector("#button1");
const customers = document.querySelector("#button2");
const customerOutput = document.querySelector("#customer");
const customersOutput = document.querySelector("#customers");

// Load event listeners
loadEventListners();

// Load Event Listeners function 
function loadEventListners(){
  
  getCustomer.addEventListener('click',loadCustomer);

} 


// Functions

function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','./playground/customer.json',true);

  xhr.onload = function(){
    if(this.status === 200){
      //console.log(this.responseText);
      
      // Parse the JSON Data
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>
      `;

      customerOutput.innerHTML = output;
    } 
  };

  xhr.send();
}


//Retreive data using XHR -- from data.txt

// function getData(e){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET','./playground/data.txt',true);
//   xhr.onload = function(){
//     if(this.status === 200){
//       console.log(this.responseText);
//       output.innerHTML = `<li>${this.responseText}</li>`;
//     }
//   }

// // Optional - Used for spinners/loaders
// xhr.onprogress = function(){

// }

// //   // readyState Values - 
// //   // 0: request not intialized
// //   // 1: server connection established
// //   // 2: request received 
// //   // 3: processing request 
// //   // 4: request finished and response is ready

// //   //HTTP STATUSES:
// //   // 200: 'OK'
// //   // 403: 'Forbidden' 
// //   // 404: 'Not Found'

//   //ON ERROR
//   xhr.onerror = function(){
//     console.log('Request error...');
//   };

//   xhr.send();
// }

