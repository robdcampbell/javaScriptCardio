// ASYNC Programming / XHR/FETCH, PROMISES, ETC...

// AJAX
console.log('test');
const button = document.getElementById('button');

button.addEventListener('click', loadData);

function loadData(e){
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN - specifiy type of request, and url(filename to open)
  xhr.open('GET','./playground/data.txt',true);

  // ONLOAD - will load data from particular file
  xhr.onload = function(){
    // Make sure status is 'OK'
    if(this.status === 200){
      console.log(this.responseText);
    }
  }

  xhr.send();


  // readState Values - 
  // 0: request not intialized
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready

  //HTTP STATUSES:
  // 200: 'OK'
  // 403: 'Forbidden' 
  // 404: 'Not Found'
};
  

//  BEGIN AT 8:49