console.log("Pterodactyl");

let output = document.querySelector("#output");
// *** Using innerHtml

// output.innerHTML = `
//     <h4 class="output__header">Test Output</h4>
// `;

// *** Using createContextualFragment()

// EXAMPLE:
/*
let tagString = "<div>I am a div node</div>";
const range = document.createRange();

// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
*/

const range = document.createRange();

range.selectNode(document.body);
console.log(document);

output.appendChild(
  range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title">Working?</div>
                <div class="kanban__column-items">second test</div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `)
);
