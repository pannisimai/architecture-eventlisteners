import "@scss/styles.scss";
import Storage from "./Storage";

const noteStorage = new Storage("myAwesomeNote");

//helper
const $ = selector => document.querySelector(selector);

const noteStorageKey = "myAwesomeNote";

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");
const noteContainer = $("#notes");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  noteStorage.save(note);
  renderNotes(note);
});

const renderNotes = note => {
  const templateOfNote = `
  <div class="note col-lg-4">
  ${note}
  </div>
  `;
  noteContainer.innerHTML = templateOfNote;
};

renderNotes(noteStorage.get());

//localstorage wrapper
// save Array -> transform: string -> localstorage.setItem
// get Arrays -> localstorage.getItem -> transform: Array
