// Add to a list: //////////////////////////////////////////

// Search Vars
const outputList = document.querySelector(".output-list");
const searchSubmitBtn = document.querySelector(".search-submit");
const searchInput = document.querySelector(".search-input");
let localStorageItems;

searchSubmitBtn.addEventListener("click", submitSearchTerm);

document.onLoad = showListItems();

// 1) look for items in local storage
// 2) If no items, set form Output to "Add an item"
// 3) If there are items, set "localStorageItems" to the parsed array of items
// 4) populate the list with items from "localStorageItems"

function showListItems() {
  console.log("List Items Test");
}

function getItemsFromStorage() {
  console.log("testsssss");
}

function submitSearchTerm(e) {
  e.preventDefault();
  addSearchTermToList(searchInput.value);
  // Add Item to local storage

  searchInput.value = "";
}

function addSearchTermToList(val) {
  // console.log(`This is my search term: ${val}`);
  const newListItem = document.createElement("li");
  newListItem.textContent = val;
  outputList.appendChild(newListItem);
}
