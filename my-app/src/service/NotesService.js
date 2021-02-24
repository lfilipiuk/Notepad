/* eslint-disable no-undef */
export default class NotesService {
  constructor() {
    this.initialStorage = localStorage.getItem("data");

    if (localStorage.getItem("data") === "[]" || localStorage.length === 0) {
      this.initialStorage = [];
      localStorage.setItem("data", JSON.stringify(this.initialStorage));
    }
  }

  getNotes = () => {
    const getData = localStorage.getItem("data");
    if (getData !== "" && getData !== null) {
      return JSON.parse(getData);
    }
    return this.initialStorage;
  };

  pushNote = (note) => {
    const prevState = JSON.parse(localStorage.getItem("data"));
    const newState = [...prevState, note];

    localStorage.setItem("data", JSON.stringify(newState));
    return newState;
  };

  removeNote = (id) => {
    const prevState = JSON.parse(localStorage.getItem("data"));
    const newState = prevState.filter((note) => note.id !== id);
    localStorage.setItem("data", JSON.stringify(newState));
    return newState;
  };

  removeAll = () => {
    this.initialStorage = [];
    localStorage.setItem("data", "[]");
    return [];
  };
}
