import KanbanAPI from "../api/kanbanAPI.js";

export default class Item {
  constructor(id, content) {
    this.elements = {};
    this.elements.root = Item.createRoot();
    this.elements.input = this.elements.root.querySelector(
      ".kanban__item-input"
    );
    this.elements.root.dataset.id = id;
    this.elements.input.textContent = content;
    // Reference to original content, in case of edits
    this.content = content;

    // PERSIST EDITS : Clicks to edit/clicks away - ITEM
    const onBlur = () => {
      const newContent = this.elements.input.textContent.trim();
      if (newContent === this.content) {
        return;
      }
      this.content = newContent;
      KanbanAPI.updateItem(id, {
        content: this.content,
      });
    };

    this.elements.input.addEventListener("blur", onBlur);
    this.elements.root.addEventListener("dblclick", () => {
      const check = confirm("Are you sure you want to delete this item?");
      if (check) {
        KanbanAPI.deleteItem(id);
        this.elements.input.removeEventListener("blur", onBlur);
        this.elements.root.parentElement.removeChild(this.elements.root);
      }
    });
    this.elements.root.addEventListener("dragstart", (e) => {});
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input" contenteditable></div>
            </div>
        `).children[0];
  }
}
