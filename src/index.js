import "./style.css";

const authorError = document.querySelector("#author +span.error");
const authorInput = document.querySelector("#authorInput");
const closeBtn = document.querySelector("#closeBtn");
const dialog = document.querySelector("#dialog");
const form = document.querySelector("#form");
const library = document.querySelector("#library");
const myLibrary = [];
const newBookBtn = document.querySelector("#newBookBtn");
const pagesError = document.querySelector("#pages +span.error");
const pagesInput = document.querySelector("#pagesInput");
const readBtn = document.querySelector(".readBtn");
const readCheckbox = document.querySelector("#readCheckbox");
const titleError = document.querySelector("#title +span.error");
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
					//const read = myLibrary[index].read;
					//if (read === "read") {
					//	myLibrary[index].read = "not read yet";
					//	createLibraryCards();
					//} else {
					//	myLibrary[index].read = "read";
					//	createLibraryCards();
					//}
					break;
				}
			}
		});
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (
		titleInput.checkValidity() &&
		authorInput.checkValidity() &&
		pagesInput.checkValidity()
	) {
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
	} else console.log(titleInput.reportValidity());
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
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.classList.add("remove");
		const readBtn = document.createElement("button");
		readBtn.textContent = "read | unread";
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

function showError() {
	if (!titleInput.validity.tooShort) {
		console.log("There was an error");
		titleError.textContent = "Title error";
		titleError.className = "error active";
	}
}
