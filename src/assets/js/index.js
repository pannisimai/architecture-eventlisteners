import "@scss/styles.scss";
import Storage from "./Storage";

const noteStorage = new Storage("myAwesomeNote");

noteStorage.on("addItem", note => {
  noteStorage.addDataSet(note);
});

noteStorage.on("updated", notes => {
  renderNotes(notes);
});

//helper
const $ = selector => document.querySelector(selector);

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");
const noteContainer = $("#notes");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  if (notes) {
    noteStorage.emit("addItem", note);
    addNoteInput.value = "";
  }
});

const renderNotes = notes => {
  noteContainer.innerHTML = notes
    .map(note => {
      return `
    <div class="note col-lg-4">
  ${note}
  </div>`;
    })
    .join("");
};
