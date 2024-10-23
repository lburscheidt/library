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
  main.innerHTML = "";
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("book-div");
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.dataset.index = myLibrary.indexOf(book);
    let titleDiv = document.createElement("p");
    titleDiv.textContent = book.title;
    titleDiv.classList.add("title");
    let authorDiv = document.createElement("p");
    authorDiv.textContent = book.author;
    let pagesDiv = document.createElement("p");
    pagesDiv.textContent = book.pages + " pages";
    let readDiv = document.createElement("p");
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    let readButton = document.createElement("button");
    readButton.textContent = "read | unread";
    readButton.classList.add("read");
    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons-div");

    readDiv.textContent = book.read;
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);

    buttonsDiv.appendChild(readButton);
    buttonsDiv.appendChild(removeButton);

    bookDiv.addEventListener("click", (e) => {
      let target = e.target;
      let index = bookDiv.dataset.index;
      switch (target.className) {
        case "remove":
          myLibrary.splice(index, 1);
          break;
        case "read":
          let read = myLibrary[index].read;
          if (read === "read") {
            myLibrary[index].read = "not read yet";
          } else {
            myLibrary[index].read = "read";
          }
          break;
      }
      loopLibrary();
    });

    main.appendChild(card);
    card.appendChild(bookDiv);
    card.appendChild(buttonsDiv);
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
