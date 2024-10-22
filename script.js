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
  "not read yet"
);

goodOmens = new Book("Good Omens", "Neil Gaiman", 400, "read");

//add book to library
function addBookToLibrary(book) {
  //  let title = prompt("Enter title");
  //  let author = prompt("Enter author");
  //  let pages = prompt("Enter number of pages");
  //  let read = prompt("Read or not read?");
  //  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary(theHobbit);
addBookToLibrary(theNeuromancer);
addBookToLibrary(goodOmens);
console.log(myLibrary);

//loop through array and display all books on the page
let main = document.querySelector("#main");

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
  readDiv.textContent = book.read;
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(readDiv);
  main.appendChild(bookDiv);
});
