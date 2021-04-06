// NOTES_LIST WITH LOCAL STORAGE.

// 1 - Dynamically Add Date Heading --- (DONE)
// 2 - Create/Edit/Delete Functionality --- (DONE)
// 3 - Complete/Non-Complete status with check button, line-through --- (DONE)
// 4 - Icon of a camper/wagooner
// 5 - Modal for delete confirmation
// 6 - Revert back to original string if updated blank by accident --- (DONE)
// 7 - Drag and drop list items to re-order (and persist).
// 8 - Prepend the last added item, persist order if drag-and-dropped.
// 9 - Responsive centering/windows are larger media queries.
//   - refactor media queries, etc... to be mobile first.
// 10 - Refactor completed project using ES6 Modules.
// 11 - Light/Dark mode
// 12 - Host on netlify

//*** BUG FIX INPUT OVERFLOW, transition to Paragraphs and introduce edit modals? dynamic textareas that replace the orginal text?  !!!

// FULLSTACK (MERN, PERN, React + Firebase)
// 11 - Translate for React: Agenda Project

const addBtn = document.querySelector(".add__btn");
const noteInput = document.querySelector(".note__input");
const notesList = document.querySelector(".notes__output");
const dateToday = document.querySelector(".dateToday");
const addConfirmation = document.getElementById("addConfirmation");

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
  noteInput.focus();
})();

// 1)  ***  Get items from local storage
function getItemsFromStorage() {
  let notesStorage = localStorage.getItem("notes");
  if (!notesStorage) {
    notesStorage = [];
    return notesStorage;
  }
  return JSON.parse(notesStorage);
}

// 2)  *** RENDER LocalStorage Notes to the DOM
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
  li.id = id;
  const form = document.createElement("form");
  form.classList = "note__item";
  //TEMP input -> p
  const noteText = document.createElement("p");

  noteText.textContent = text;
  noteText.disabled = true;

  const btnContainer = document.createElement("div");
  btnContainer.classList = "btnContainer";

  const progressBtn = document.createElement("button");
  progressBtn.classList = "progress";
  progressBtn.textContent = "completed";
  if (completed) {
    progressBtn.textContent = "still working on it";
    progressBtn.classList = "progress";
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

  notesList.appendChild(li);
}

// Action Confirmations
function actionAlert(message) {
  addConfirmation.textContent = `${message}`;
  setTimeout(() => {
    addConfirmation.textContent = "";
  }, 2000);
}

/*
  ========================================================
  Create note
  ======================================================== 
*/
function createNote(e) {
  e.preventDefault();
  actionAlert("*Note Added");

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
    actionAlert("*Note Deleted");

    const updatedNotes = notesStorage.filter(
      (note) => Number(note.id) !== Number(noteContainer.id)
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    noteContainer.remove();
  }

  // COMPLETED
  if (e.target.textContent === "completed") {
    e.target.textContent = "still working on it";
    noteContainer.firstChild.firstChild.classList = "completed";
    let updatedNotes = notesStorage.map((note) => {
      if (Number(note.id) === Number(noteContainer.id)) {
        return {
          ...note,
          completed: true,
        };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    return;
  }
  // SET BACK TO IN-PROGRESS
  if (e.target.textContent === "still working on it") {
    e.target.textContent = "completed";
    noteContainer.firstChild.firstChild.classList = "";
    let updatedNotes = notesStorage.map((note) => {
      if (Number(note.id) === Number(noteContainer.id)) {
        return {
          ...note,
          completed: false,
        };
      }
      return note;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    return;
  }

  // EDIT NOTE
  if (e.target.textContent === "edit") {
    noteContainer.firstChild.firstChild.disabled = false;
    noteContainer.firstChild.firstChild.focus();
    e.target.textContent = "update";
    return;
  }
  // EDIT NOTE - UPDATE
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
