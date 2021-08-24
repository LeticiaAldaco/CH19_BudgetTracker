const indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB;

let db;
const request = indexedDB.open("budgetTracker", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};
