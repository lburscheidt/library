import "./style.css";

const closeBtn = document.querySelector(".closeBtn");
const dialog = document.querySelector("#dialog");
const library = document.querySelector("#library");
const myLibrary = [];
const newBookBtn = document.querySelector("#newBookBtn");
const submitBtn = document.querySelector("#submitBtn");

window.onload = () => {
	createLibraryCards();
};

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}. ${this.pages} pages. ${this.read}.`;
};

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function createLibraryCards() {
	library.innerHTML = "";
	for (const book of myLibrary) {
		const bookDiv = document.createElement("div");
		bookDiv.classList.add("book");
		bookDiv.dataset.index = myLibrary.indexOf(book);
		const titleDiv = document.createElement("p");
		titleDiv.textContent = book.title;
		const authorDiv = document.createElement("p");
		authorDiv.textContent = book.author;
		const pagesDiv = document.createElement("p");
		pagesDiv.textContent = book.pages;
		const readDiv = document.createElement("p");
		const removeButton = document.createElement("button");
		removeButton.textContent = "Remove";
		removeButton.classList.add("remove");
		const readButton = document.createElement("button");
		readButton.textContent = "read | unread";
		readButton.classList.add("read");
		const buttonsDiv = document.createElement("div");
		buttonsDiv.classList.add("buttons-div");

		readDiv.textContent = book.read;
		bookDiv.appendChild(titleDiv);
		bookDiv.appendChild(authorDiv);
		bookDiv.appendChild(pagesDiv);
		bookDiv.appendChild(readDiv);
		bookDiv.appendChild(buttonsDiv);
		buttonsDiv.appendChild(readButton);
		buttonsDiv.appendChild(removeButton);

		bookDiv.addEventListener("click", (e) => {
			const target = e.target;
			const index = bookDiv.dataset.index;
			switch (target.className) {
				case "remove":
					myLibrary.splice(index, 1);
					createLibraryCards();
					break;
				case "read": {
					const read = myLibrary[index].read;
					if (read === "read") {
						myLibrary[index].read = "not read yet";
						createLibraryCards();
					} else {
						myLibrary[index].read = "read";
						createLibraryCards();
					}
					break;
				}
			}
		});
		library.appendChild(bookDiv);
	}
}

newBookBtn.addEventListener("click", () => {
	dialog.showModal();
});
closeBtn.addEventListener("click", () => {
	dialog.close();
});
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	dialog.close();
	getInput();
	createLibraryCards();
});

function getInput() {
	const inputTitle = document.querySelector("#title").value;
	const inputAuthor = document.querySelector("#author").value;
	const inputPages = document.querySelector("#pages").value;
	let inputRead;
	if (document.querySelector("#read").checked) {
		inputRead = "read";
	} else {
		inputRead = "not read yet";
	}

	const inputBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
	console.log(inputBook);
	addBookToLibrary(inputBook);
	console.log(myLibrary);
}
