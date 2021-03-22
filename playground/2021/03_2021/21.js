const inputVal = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');
let notes;

// Load event listeners 
addNoteBtn.addEventListener('click', addNote)
notesList.addEventListener('click', deleteNote)

// Load all data when document loads
document.onload =  getNotes();
document.onload =  populateNotesList(notes);

// Fetch all notes from Local storage
function getNotes(){
  fetchNotes =  JSON.parse(localStorage.getItem('notes'));
  if(fetchNotes){
    notes = fetchNotes
  } else{
    notes = [];
  }
  return notes;
}

// Populate NoteList with localstorage items
function populateNotesList(notes){
  notes.forEach((note)=>{
    const li = document.createElement('li');
    li.classList = 'note__item';
    const text = document.createElement('p');
    text.textContent = note;
    li.appendChild(text);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    li.appendChild(deleteBtn);

    notesList.appendChild(li);
  })  
}

// Creating individual note
function createNote(){
  const li = document.createElement('li');
    li.classList = 'note__item';
    const text = document.createElement('p');
    text.textContent = note;
    li.appendChild(text);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    li.appendChild(deleteBtn);

    notesList.appendChild(li);
}


function addNote(e){
  e.preventDefault();
  if(inputVal.value.length === 0){
    alert('Please add a task')
  } else {
    let allNotes = getNotes();
    allNotes.push(`${inputVal.value}`);
    localStorage.setItem('notes', JSON.stringify(allNotes))
    
    const li = document.createElement('li');
    li.classList = 'note__item';
    const text = document.createElement('p');
    text.textContent = inputVal.value;
    li.appendChild(text);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    li.appendChild(deleteBtn);
    notesList.appendChild(li);

    inputVal.value = "";
  }
}

function deleteNote(e){ 
  e.preventDefault();

  const li = e.target.parentElement;
  console.log(li.children[0].textContent);
  
  let allNotes = getNotes();
  const filteredList = allNotes.filter(item => item !== li.children[0].textContent);
  localStorage.setItem('notes', JSON.stringify(filteredList))
  e.target.parentElement.remove();
}