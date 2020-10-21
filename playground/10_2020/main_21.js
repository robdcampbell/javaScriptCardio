// Data from an External API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 





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