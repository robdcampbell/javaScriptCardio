// Add to a list: //////////////////////////////////////////

// Search Vars
const outputList = document.querySelector(".output-list");
const searchSubmitBtn = document.querySelector(".search-submit");
const searchInput = document.querySelector(".search-input");

searchSubmitBtn.addEventListener("click", submitSearchTerm);

function submitSearchTerm(e) {
  e.preventDefault();
  //   console.log(searchInput.value);
  addSearchTermToList(searchInput.value);
  searchInput.value = "";
}

function addSearchTermToList(val) {
  console.log(`This is my search term: ${val}`);
  const newListItem = document.createElement("li");
  newListItem.textContent = val;
  outputList.appendChild(newListItem);
}
