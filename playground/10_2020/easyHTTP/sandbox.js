
// UI Selectors
const taskBtn = document.getElementById('task-btn');
const taskList= document.getElementById('form-list');

// Event Listeners
taskBtn.addEventListener('click', addTask);



// UI functions

function addTask(e){
  const taskInput = document.getElementById('task-input').value;
  let output = '';
  
  // Form input validation
  if(taskInput === ''){
    const alertMessage = document.createElement('h3');
    alertMessage.style.color = 'red';
    alertMessage.textContent = 'Please add a task first.';
    alertMessage.id = 'alert-message';

    taskList.before(alertMessage);
    setTimeout(()=>document.getElementById('alert-message').remove() ,3000);
  }else {

  }
  e.preventDefault();
}