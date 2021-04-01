const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");

// Event Listeners:
addBtn.addEventListener("click", addNote);

// ONLOAD: with an IIFE
document.onload = (function () {
  getItemsFromStorage();
  setNotesList();
})();

// ***  Get items from local storage
function getItemsFromStorage() {
  let notesStorage = localStorage.getItem("notes");
  if (!notesStorage) {
    notesStorage = [];
    console.log(notesStorage.length);
    return notesStorage;
  }
  console.log(notesStorage);
  return notesStorage;
}
// ***  Set items in local storage
function setLocalStorage(newNote) {
  getItemsFromStorage();
  console.log(`TEST: ${notesStorage}`);
}

// *** Set current notes from local storage
function setNotesList() {
  //map through all items from localstorage and output to list
}

/*
  ========================================================
  ======================================================== 
*/

// ON ADD:
function addNote(e) {
  e.preventDefault();

  if (!noteInput.value) {
    alert("You need to enter something!");
    return;
  }

  let id = Date.now();
  let text = noteInput.value;
  let notesStorage = JSON.parse(getItemsFromStorage());

  console.log(`ID:${id}, Text: ${text}`);
  notesStorage.push({ id, text });

  localStorage.setItem("notes", JSON.stringify(notesStorage));

  noteInput.value = "";
}
// append to the DOM
// grab items from local stroage
// append to the local storage set updated list of notes

/*
  ========================================================
  ======================================================== 
  */
// ON DELETE:
// remove from the DOM
// Fetch items from localStorage
// delete from local storage set updated list of notes
