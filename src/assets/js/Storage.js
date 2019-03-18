//localstorage wrapper
// save Array -> transform: string -> localstorage.setItem
// get Arrays -> localstorage.getItem -> transform: Array

import Events from "./Events";
export default class Storage extends Events {
  constructor(localStorageKey) {
    super();
    this.key = localStorageKey;
    this.data = this.get() || [];
  }

  addDataSet(dataParamater) {
    this.data.push(dataParamater);
    this.emit("updated", this.data);
    this.save();
  }

  save() {
    //have access to current data
    const data = this.data;
    //transform to string
    const stringified = JSON.stringify(data);
    // save to localstore
    localStorage.setItem(this.key, stringified);
  }

  get() {
    const localStorageValue = window.localStorage.getItem(this.key);
    this.data = JSON.parse(localStorageValue) || [];
    this.emit("updated", this.data);
    return this.data;
  }
}
