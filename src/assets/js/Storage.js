// LocalStorage Wrapper
// save Array -> transform: String -> localStorage.setItem
// get Array -> localStorage.getItem -> transform: Array

import MyNiceEvents from "./Events";

import { renderNotes } from "./helper";
import { type } from "os";

export default class Storage extends MyNiceEvents {
  constructor(localStorageKey) {
    super();
    this.key = localStorageKey;
    this.data = this.get();
  }

  addDataSet(dataParameter) {
    //this is data -> push to this.data array the new note
    this.data.push(dataParameter);
    // we update the uo with the new this.data
    this.emit("updated", this.data);
    // update local storage
    this.save();
  }

  removeDataSet(dataParameter) {
    // console.log(`ok remove it ${dataParameter}`);
    // console.log(`${this.data}`);

    //DELETE WITH SPLICE
    // const indexNumber = Number(dataParameter);
    // this.data.splice(indexNumber, 1);

    //DELETE WITH FILTER
    const arrayed = Array.from(this.data);
    this.data = arrayed.filter((item, index) => {
      return index != dataParameter;
    });
    console.log(this.data);

    //remove from this.data
    // we update the ui with the new this.data
    this.emit("updated", this.data);
    // // update local storage
    this.save();
  }

  RemoveAll(dataParameter) {
    this.data = [];
    this.emit("updated", this.data);
    // // update local storage
    this.save();
  }

  save() {
    // have access to current data
    const data = this.data;
    // transform to string
    const stringified = JSON.stringify(data);
    // save to localStorage
    window.localStorage.setItem(this.key, stringified);
  }

  get() {
    const localStorageValue = window.localStorage.getItem(this.key);
    this.data = JSON.parse(localStorageValue) || [];
    this.emit("updated", this.data);
    return this.data;
  }

  initFinished() {
    this.emit("updated", this.data);
  }
}

export const noteStorage = new Storage("myAwesomeNote");

noteStorage.on("addItem", note => {
  noteStorage.addDataSet(note);
});

noteStorage.on("updated", notes => {
  renderNotes(notes);
});

noteStorage.on("removeItem", note => {
  noteStorage.removeDataSet(note);
});

noteStorage.on("removeAll", notes => {
  noteStorage.RemoveAll(notes);
});

noteStorage.initFinished();
