import "@scss/styles.scss";

//helper
const $ = selector => document.querySelector(selector);

const addNoteInput = $("#add-note");
const addNoteButton = $("#add-note-button");
const noteContainer = $("#notes");

addNoteButton.addEventListener("click", e => {
  const note = addNoteInput.value;
  localStorage.setItem("myAwesomeNote", note);
});

const renderNotes = note => {
  const templateOfNote = `
  <div class="note col-lg-4">
  ${note}
  </div>
  `;
  noteContainer.innerHTML = templateOfNote;
};

renderNotes("this a test");
