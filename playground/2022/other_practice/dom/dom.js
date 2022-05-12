console.log("test");

let output = document.querySelector("#output");
// output.innerHTML = `
//     <h4 class="output__header">Test Output</h4>
// `;

// const range = document.createRange();

const range = document.createRange();

range.selectNode(document.body);

output.append(
  range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title">Working?</div>
                <div class="kanban__column-items">second test</div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).children[0]
);
