import { noteStorage } from "./Storage";

// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  deleteNoteButton: $("#delete-note-button"),
  NoteDiv: null
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-sm-3" id=${index}>
          ${note}
          <i class="fas fa-times"></i>
        </div>
      `;
    })
    .join("");

  domElements.NoteDiv = document.querySelectorAll(".note");

  targetNotes();
};

const targetNotes = () => {
  if (domElements.NoteDiv !== null)
    domElements.NoteDiv.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {
        const id = event.target.id;
        noteStorage.emit("removeItem", id);
      });
    });
};
