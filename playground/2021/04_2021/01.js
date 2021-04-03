// NOTES_LIST WITH LOCAL STORAGE.

// 1 - Dynamically Add Date Heading
// 2 - Create/Edit/Delete Functionality (DONE)
// 3 - Complete/Non-Complete status with check button
// 4 - Icon of a camper/wagooner

const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");
const notesList = document.querySelector(".notes__output");

// Event Listeners:
addBtn.addEventListener("click", createNote);
notesList.addEventListener("click", notesActions);
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
    addNoteToDOM(note);
  });
}

// 3) *** Add note to DOM
function addNoteToDOM(note) {
  const li = document.createElement("li");
  const form = document.createElement("form");
  const noteText = document.createElement("input");
  noteText.value = note.text;
  noteText.disabled = true;
  const btnContainer = document.createElement("div");
  btnContainer.classList = "btnContainer";
  const editNoteBtn = document.createElement("button");
  editNoteBtn.textContent = "edit";
  editNoteBtn.classList = "editBtn";
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList = "deleteNoteBtn";
  deleteNoteBtn.textContent = "delete";

  li.appendChild(noteText);
  btnContainer.appendChild(editNoteBtn);
  btnContainer.appendChild(deleteNoteBtn);
  li.appendChild(btnContainer);

  li.id = note.id;
  li.classList = "note__item";
  notesList.appendChild(li);
}

/*
  ========================================================
  ======================================================== 
*/

// ON ADD:
function createNote(e) {
  e.preventDefault();

  if (!noteInput.value) {
    alert("You need to enter something!");
    return;
  }

  let id = Date.now();
  let text = noteInput.value;

  const newNote = { id, text };

  noteInput.value = "";
  let notesStorage = getItemsFromStorage();
  notesStorage.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notesStorage));

  // append to list on the DOM
  const li = document.createElement("li");
  const form = document.createElement("form");
  const noteText = document.createElement("input");
  noteText.value = text;
  noteText.disabled = true;
  const btnContainer = document.createElement("div");
  btnContainer.classList = "btnContainer";
  const editNoteBtn = document.createElement("button");
  editNoteBtn.textContent = "edit";
  editNoteBtn.classList = "editBtn";
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList = "deleteNoteBtn";
  deleteNoteBtn.textContent = "delete";

  li.appendChild(noteText);
  btnContainer.appendChild(editNoteBtn);
  btnContainer.appendChild(deleteNoteBtn);
  li.appendChild(btnContainer);

  li.id = id;
  li.classList = "note__item";
  notesList.appendChild(li);
}

/*
  ========================================================
  Note action events - delegated from notes list
  ======================================================== 
  */
//
function notesActions(e) {
  e.preventDefault();

  let notesStorage = getItemsFromStorage();
  let noteContainer = e.target.parentElement.parentElement;
  let notePara = noteContainer.firstChild;
  if (e.target.textContent === "delete") {
    console.log("deleted");
    //DOM
    noteContainer.remove();
    // FROM STORAGE
    console.log(notePara);
    const updatedNotes = notesStorage.filter(
      (note) => note.text !== notePara.value
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  // EDIT/UPDATE FUNCTIONALITY
  if (e.target.textContent === "edit") {
    noteContainer.firstChild.disabled = false;
    noteContainer.firstChild.focus();
    console.log(noteContainer.id);
    e.target.textContent = "update";
    return;
  }
  if (e.target.textContent === "update") {
    noteContainer.firstChild.disabled = true;
    e.target.textContent = "edit";
    let updatedNotes = notesStorage.map((note) => {
      if (Number(note.id) === Number(noteContainer.id)) {
        return {
          id: Number(noteContainer.id),
          text: noteContainer.firstChild.value,
        };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    return;
  }
}
