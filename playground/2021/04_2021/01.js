// NOTES_LIST WITH LOCAL STORAGE.

const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");
const notesList = document.querySelector(".notes__output");

// Event Listeners:
addBtn.addEventListener("click", addNote);
// ONLOAD: with an IIFE
document.onload = (function () {
  getItemsFromStorage();
  setNotesList();
})();

// 1)  ***  Get items from local storage
function getItemsFromStorage() {
  let notesStorage = localStorage.getItem("notes");
  if (!notesStorage) {
    notesStorage = [];
    console.log(notesStorage.length);
    return notesStorage;
  }
  return JSON.parse(notesStorage);
}

// 2)  *** Set current DOM notes from local storage
function setNotesList() {
  let notesStorage = getItemsFromStorage();
  if (notesStorage.length === 0) {
    console.log("NONE");
    return;
  }
  let notes = notesStorage;
  notes.forEach((note) => {
    // CREATE EACH NOTE:
    const li = document.createElement("li");
    const noteText = document.createElement("p");
    noteText.textContent = note.text;
    const editNoteBtn = document.createElement("button");
    editNoteBtn.textContent = "edit";
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.textContent = "delete";

    li.appendChild(noteText);
    li.appendChild(editNoteBtn);
    li.appendChild(deleteNoteBtn);

    li.id = note.id;
    li.classList = "note__item";
    notesList.appendChild(li);
  });

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
  let notesStorage = getItemsFromStorage();
  notesStorage.push({ id, text });
  localStorage.setItem("notes", JSON.stringify(notesStorage));

  // append to the DOM

  noteInput.value = "";
}

/*
  ========================================================
  ======================================================== 
  */
// ON DELETE:
// remove from the DOM
// Fetch items from localStorage
// delete from local storage set updated list of notes
