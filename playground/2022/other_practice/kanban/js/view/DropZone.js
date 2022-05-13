export default class DropZone {
  static createDropZone() {
    const range = document.createRange();

    range.selectNode(document.body);

    const dropZone = range.createContextualFragment(`
            <div class="kanban__dropzone" draggable="true"></div>
        `).children[0];

    // Drag and Drop magic
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("kanban__dropzone--active");
    });
    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("kanban__dropzone--active");
    });

    return dropZone;
  }
}
