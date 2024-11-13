import "./style.css";

const authorError = document.querySelector("#authorError");
const authorInput = document.querySelector("#authorInput");
const closeBtn = document.querySelector("#closeBtn");
const dialog = document.querySelector("#dialog");
const form = document.querySelector("#form");
const library = document.querySelector("#library");
const myLibrary = [];
const newBookBtn = document.querySelector("#newBookBtn");
const pagesError = document.querySelector("#pagesError");
const pagesInput = document.querySelector("#pagesInput");
const readBtn = document.querySelector(".readBtn");
const readCheckbox = document.querySelector("#readCheckbox");
const titleError = document.querySelector("#titleError");
const titleInput = document.querySelector("#titleInput");

function addEventListeners() {
	const libraryCards = document.querySelectorAll(".book");
	for (const card of libraryCards) {
		card.addEventListener("click", (e) => {
			const target = e.target;
			const index = card.dataset.index;
			switch (target.className) {
				case "remove":
					myLibrary.splice(index, 1);
					createLibraryCards();
					break;
				case "read": {
					myLibrary[index].toggleRead();
					createLibraryCards();
					break;
				}
			}
		});
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const title = titleInput.value.trim();
	if (title === "") {
		titleError.textContent = "Title is required.";
		titleInput.parentNode.classList.add("error");
		titleInput.parentNode.classList.remove("success");
	} else {
		titleError.textContent = "";
		titleInput.parentNode.classList.remove("error");
		titleInput.parentNode.classList.add("success");
	}
	const author = authorInput.value.trim();
	if (author === "") {
		authorError.textContent = "Title is required.";
		authorInput.parentNode.classList.add("error");
		authorInput.parentNode.classList.remove("success");
	} else {
		authorError.textContent = "";
		authorInput.parentNode.classList.remove("error");
		authorInput.parentNode.classList.add("success");
	}
	if (titleError.textContent === "" && authorError.textContent === "") {
		const addBook = new Book(
			titleInput.value,
			authorInput.value,
			pagesInput.value,
			setRead(),
		);
		addBookToLibrary(addBook);
		dialog.close();
		clearForm();
		createLibraryCards();
		addEventListeners();
	}
});

window.onload = () => {
	createLibraryCards();
	addEventListeners();
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
	toggleRead() {
		if (this.read === "read") {
			this.read = "not read yet";
		} else {
			this.read = "read";
		}
	}
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function setReadBtnText(index) {
	if (myLibrary[index].read === "read") {
		return "Mark unread";
	}
	return "Mark read";
}

function createLibraryCards() {
	library.innerHTML = "";
	for (const book of myLibrary) {
		const bookDiv = document.createElement("div");
		bookDiv.classList.add("book");
		const index = myLibrary.indexOf(book);
		bookDiv.dataset.index = index;
		const titleDiv = document.createElement("p");
		titleDiv.textContent = book.title;
		const authorDiv = document.createElement("p");
		authorDiv.textContent = book.author;
		const pagesDiv = document.createElement("p");
		pagesDiv.textContent = book.pages;
		const readDiv = document.createElement("p");
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.classList.add("remove");
		const readBtn = document.createElement("button");
		//		readBtn.textContent = "read|unread";
		readBtn.textContent = setReadBtnText(index);
		readBtn.classList.add("read");
		const btnsDiv = document.createElement("div");
		btnsDiv.classList.add("buttons-div");
		readDiv.textContent = book.read;
		bookDiv.appendChild(titleDiv);
		bookDiv.appendChild(authorDiv);
		bookDiv.appendChild(pagesDiv);
		bookDiv.appendChild(readDiv);
		bookDiv.appendChild(btnsDiv);
		btnsDiv.appendChild(readBtn);
		btnsDiv.appendChild(removeBtn);
		library.appendChild(bookDiv);
		addEventListeners();
	}
}

newBookBtn.addEventListener("click", () => {
	dialog.showModal();
});
closeBtn.addEventListener("click", () => {
	dialog.close();
});

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

// titleInput.addEventListener("click", (e) => {
// 	if (titleInput.validity.valid) {
// 		titleError.textContent = "";
// 		titleError.className = "error";
// 	} else {
// 		showError();
// 	}
// });
//
// titleInput.addEventListener("input", (e) => {
// 	if (titleInput.validity.valid) {
// 		titleError.textContent = "";
// 		titleError.className = "error";
// 	} else {
// 		showError();
// 	}
// });
