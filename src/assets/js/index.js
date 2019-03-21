import "@scss/styles.scss";
import { noteStorage } from "./Storage";

import { domElements } from "./helper";

const { addNoteButton, addNoteInput, noteDiv, deleteNoteButton } = domElements;

addNoteButton.addEventListener("click", () => {
  const note = addNoteInput.value;
  if (note) {
    noteStorage.emit("addItem", note);
    addNoteInput.value = "";
  }
});

addNoteInput.addEventListener("keyup", e => {
  const note = addNoteInput.value;
  if (note) {
    if (e.keyCode === 13) {
      noteStorage.emit("addItem", note);
      addNoteInput.value = "";
    }
  }
});

deleteNoteButton.addEventListener("click", () => {
  noteStorage.emit("removeAll");
});
