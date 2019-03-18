export default class Storage {
  constructor(localStorageKey) {
    this.key = localStorageKey;
  }

  save(ele) {
    localStorage.setItem(this.key, ele);
  }

  get() {
    return localStorage.getItem(this.key);
  }
}
