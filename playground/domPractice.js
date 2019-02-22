//Global Variables
const mainForm = document.querySelector('.inputForm');
const textInput = document.querySelector('#textVal');
const addButton = document.querySelector('#addText');
const output = document.querySelector('#output');

//Load ALL Event listeners
loadEventListeners();

// Event Listener Function 
function loadEventListeners(){
    //Add Item to List Event
    mainForm.addEventListener('click',addItem)
    // Remove Item from List Event
    document.addEventListener('click',removeItem)
    //alerting what the parent element is
    document.addEventListener('click', getParent)

    // clear the whole page
    document.addEventListener('click', clearPage)
}


// Functions
function addItem(e){
    // Verify button clicked and some text exists
    if(e.target === addButton && textInput.value !== ''){
       const li = document.createElement('li');
       li.classList = 'container'
        li.classList += ' listItem';
        li.appendChild(document.createTextNode(textInput.value));
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.classList += 'removeItem';
        li.appendChild(removeBtn);
        output.appendChild(li);

    } 

// Reset input field
textInput.value = '';
e.preventDefault();
}; // addItem 

function removeItem(e){
    if(e.target.classList.contains('removeItem')){
        e.target.parentElement.remove();
    }
   
    // if(e.target.classList.contains('removeItem')){
    //    console.log('has remove');
    // }
}


// Alert Parent Element 
function getParent(e){
    //alert(e.target.parentElement.tagName);
    console.log(e.target);
}


function clearPage(e){
    if(e.target.id === 'removeAll'){
        console.log('true');
    }
}
