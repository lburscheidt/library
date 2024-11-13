import "./style.css";

const closeBtn = document.querySelector("#closeBtn");
const dialog = document.querySelector("#dialog");
const library = document.querySelector("#library");
const myLibrary = [];
const newBookBtn = document.querySelector("#newBookBtn");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readCheckbox = document.querySelector("#readCheckbox");
const readBtn = document.querySelector(".read");
const titleError = document.querySelector("#titleError");
const authorError = document.querySelector("#author +span.error");
const pagesError = document.querySelector("#pages +span.error");

window.onload = () => {
	createLibraryCards();
};

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
	getInfo() {
		return `${this.title} by ${this.author}. ${this.pages} pages. ${this.read}.`;
	}
}

// const theHobbit = new Book("Hobbit", "Tolkien", "200", "read");
// console.log(theHobbit);
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

titleInput.addEventListener("click", (e) => {
	if (titleInput.validity.valid) {
		titleError.textContent = "";
		titleError.className = "error";
	} else {
		showError();
	}
});

titleInput.addEventListener("input", (e) => {
	if (titleInput.validity.valid) {
		titleError.textContent = "";
		titleError.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (e) => {
	//	if (
	//	//	!title.validity.valid ||
	//	//	!author.validity.valid ||
	//	//	!pages.validity.valid
	//	) {
	//		showError();
	//		e.preventDefault();
	//	} else {
	e.preventDefault();

	const inputBook = new Book(
		titleInput.value,
		authorInput.value,
		pagesInput.value,
		setRead(),
	);
	addBookToLibrary(inputBook);
	dialog.close();
	clearForm();
	createLibraryCards();
});

function showError() {
	if (!titleInput.validity.tooShort) {
		console.log("There was an error");
		titleError.textContent = "Title error";
		titleError.className = "error active";
	}
}

function clearForm() {
	titleInput.innerHTML = "";
	authorInput.innerHTML = "";
	pagesInput.innerHTML = "";
	readCheckbox.checked = false;
}

function setRead() {
	if (readCheckbox.checked) {
		return "read";
	}
	return "not read yet";
}
