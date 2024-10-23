document.addEventListener("DOMContentLoaded", () => {
  loopLibrary();
});

//Library object

const myLibrary = [];

//Object constructor for books

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}. ${this.pages} pages. ${this.read}.`;
};

//testing book object constructor
theHobbit = new Book("The Hobbit", "Tolkien", 295, "read");
theNeuromancer = new Book(
  "The Neuromancer",
  "William Gibson",
  450,
  "not read yet",
);

goodOmens = new Book("Good Omens", "Neil Gaiman", 400, "read");

//add book to library
function addBookToLibrary(book) {
  myLibrary.push(book);
}
addBookToLibrary(theHobbit);
addBookToLibrary(theNeuromancer);
addBookToLibrary(goodOmens);
console.log(myLibrary);

//loop through array and display all books on the page
let main = document.querySelector("#main");

function loopLibrary() {
  myLibrary.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let titleDiv = document.createElement("p");
    titleDiv.textContent = book.title;
    let authorDiv = document.createElement("p");
    authorDiv.textContent = book.author;
    let pagesDiv = document.createElement("p");
    pagesDiv.textContent = book.pages;
    let readDiv = document.createElement("p");
    let readButton = document.createElement("button");
    readButton.textContent = "mark read | unread";
    readDiv.textContent = book.read;
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(readButton);
    main.appendChild(bookDiv);
  });
}

const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#new-book");
const closeButton = document.querySelector(".x");
const submitButton = document.querySelector("#submit_2");

showButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});
submitButton.addEventListener("click", () => {
  dialog.close();
  getInput();
  loopLibrary();
});

// function getInput() {
//   let inputTitle = document.querySelector("#title").value;
//   console.log(inputTitle);
// }

function getInput() {
  let inputTitle = document.querySelector("#title").value;
  let inputAuthor = document.querySelector("#author").value;
  let inputPages = document.querySelector("#pages").value;
  let inputRead;
  if (document.querySelector("#read").checked) {
    inputRead = "read";
  } else {
    inputRead = "not read yet";
  }

  let inputBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
  console.log(inputBook);
  addBookToLibrary(inputBook);
  console.log(myLibrary);
}
