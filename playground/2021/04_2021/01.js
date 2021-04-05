// NOTES_LIST WITH LOCAL STORAGE.

// 1 - Dynamically Add Date Heading --- (DONE)
// 2 - Create/Edit/Delete Functionality --- (DONE)
// 3 - Complete/Non-Complete status with check button, line-through
// 4 - Icon of a camper/wagooner
// 5 - Modal for delete confirmation
// 6 - Revert back to original string if updated blank by accident --- (DONE)
// 7 - Drag and drop list items to re-order (and persist)
// 8 - Prepend the last added item, persist order if drag-and-dropped

const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");
const notesList = document.querySelector(".notes__output");
const dateToday = document.querySelector(".dateToday");

let date = new Date();
let today = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

dateToday.textContent = `${month + 1}/${today}/${year}`;

// Event Listeners:
addBtn.addEventListener("click", createNote);
notesList.addEventListener("click", notesActions);
// ONLOAD: with an IIFE
document.onload = (function () {
  getItemsFromStorage();
  setNotesList();
  console.log(getItemsFromStorage());
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
    const { text, id, completed } = note;
    addNoteToDOM(text, id, completed);
  });
}

// 3) *** Add note to DOM
function addNoteToDOM(text, id, completed) {
  const li = document.createElement("li");
  const form = document.createElement("form");
  const noteText = document.createElement("input");
  noteText.value = text;
  noteText.disabled = true;
  //
  // temporary
  // noteText.classList = "completed";

  const btnContainer = document.createElement("div");
  btnContainer.classList = "btnContainer";
  const progressBtn = document.createElement("button");
  progressBtn.classList = "progress";
  progressBtn.textContent = "completed";
  if (completed) {
    progressBtn.classList = "progress completed";
    noteText.classList = "completed";
  }
  progressBtn.type = "button";
  const editNoteBtn = document.createElement("button");
  editNoteBtn.textContent = "edit";
  editNoteBtn.classList = "editBtn";
  editNoteBtn.type = "submit";
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList = "deleteNoteBtn";
  deleteNoteBtn.textContent = "delete";
  deleteNoteBtn.type = "button";

  form.appendChild(noteText);
  btnContainer.appendChild(progressBtn);
  btnContainer.appendChild(editNoteBtn);
  btnContainer.appendChild(deleteNoteBtn);
  form.appendChild(btnContainer);
  li.appendChild(form);

  form.classList = "note__item";

  li.id = id;
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
  let completed = false;

  const newNote = { id, text, completed };

  noteInput.value = "";
  let notesStorage = getItemsFromStorage();
  notesStorage.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notesStorage));

  // ADD STATUS ARGUMENT!
  addNoteToDOM(text, id, completed);
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
  let noteContainer = e.target.parentElement.parentElement.parentElement;

  if (e.target.textContent === "delete") {
    console.log(noteContainer.id);
    const updatedNotes = notesStorage.filter(
      (note) => Number(note.id) !== Number(noteContainer.id)
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    noteContainer.remove();
  }

  // EDIT/UPDATE FUNCTIONALITY

  if (e.target.textContent === "edit") {
    noteContainer.firstChild.firstChild.disabled = false;
    noteContainer.firstChild.firstChild.focus();

    e.target.textContent = "update";
    return;
  }
  if (e.target.textContent === "update") {
    noteContainer.firstChild.firstChild.disabled = true;
    e.target.textContent = "edit";
    if (noteContainer.firstChild.firstChild.value === "") {
      let preText = notesStorage.filter(
        (note) => Number(note.id) === Number(noteContainer.id)
      );
      noteContainer.firstChild.firstChild.value = preText[0].text;
    } else {
      let updatedNotes = notesStorage.map((note) => {
        if (Number(note.id) === Number(noteContainer.id)) {
          return {
            id: Number(noteContainer.id),
            text: noteContainer.firstChild.firstChild.value,
          };
        }
        return note;
      });
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    return;
  }
}
