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
console.log(theHobbit.info());

//add book to library
function addBookToLibrary() {
  let title = prompt("Enter title");
  let author = prompt("Enter author");
  let pages = prompt("Enter number of pages");
  let read = prompt("Read or not read?");
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//loop through array and display all books on the page
