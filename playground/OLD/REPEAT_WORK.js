// Global Variables
const button = document.querySelector('#button');

// Add event listener
button.addEventListener('click', loadData);

function loadData(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','./playground/data.txt',true);
  xhr.onload = function(){
    if(this.status === 200){
        console.log(this.responseText);
    }
  }
  xhr.send();
}