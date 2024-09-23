const myLibrary = [];
let title = "";
let author = "";
let pages = "";
let read = "";
let data = true;

function Book(title, author, pages, read, data) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = data;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read, data);
    myLibrary.push(newBook);
    createBookDivs();

}

function addRemoveBtn(cardDiv, event, bookNum) {
    const removeBook = document.createElement("button");
    removeBook.classList.add("removeBook");
    removeBook.textContent = "⨉";
    cardDiv.appendChild(removeBook);
    const removeArray = document.querySelectorAll(".removeBook");
    removeArray.forEach((removeBtn) => {
        removeBtn.addEventListener("click", () => {
            event.target.remove();
            myLibrary[bookNum].data = false;
        })
    })
}

function addToggleReadBtn(cardDiv, bookNum) {
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggleBtn");
    toggleBtn.textContent = "Mark as read";
    cardDiv.appendChild(toggleBtn);
    const toggleArray = document.querySelectorAll(".toggleBtn");
    toggleArray.forEach((toggleBtn) => {
        toggleBtn.addEventListener("click", () => {
            if (myLibrary[bookNum].read == "notRead")
            myLibrary[bookNum].read = "toggled";
        })
    })
}

function toggled(bookNum) {
    myLibrary[bookNum].read = "yesRead";
    readStatus = "has been read";
}

let readStatus = "";
function addHoverDisplay() {
    const bookCardArray = document.querySelectorAll(".bookCard")
    bookCardArray.forEach((bookCard) => {
        bookCard.addEventListener("mouseenter", function (e) {
            const bookNum = Number(e.target.id.slice(4)) - 1;
            const bookInfo = myLibrary[bookNum];
            if (bookInfo.read == "notRead") {
                readStatus = "not read yet";
            }
            // else if (bookInfo.read == "toggled") {
            //    toggled(bookNum);
            // }
            else {
                readStatus = "has been read";
            }
            const existingText = bookCard.innerHTML;
            bookCard.innerHTML = existingText.replace(e.target.id[0].toUpperCase() + e.target.id.slice(1), bookInfo.title + " by " + bookInfo.author + ", " + bookInfo.pages + " pages, " + readStatus);
            addRemoveBtn(bookCard, e, bookNum);
            addToggleReadBtn(bookCard, bookNum);
        })
        bookCard.addEventListener("mouseleave", function (e) {
            const bookNum = Number(e.target.id.slice(4)) - 1;
            const bookInfo = myLibrary[bookNum];
            if (bookInfo.read == "notRead" || "toggled") {
                readStatus = "not read yet";
            }
            else {
                readStatus = "has been read";
            }
            bookCard.textContent = e.target.id[0].toUpperCase() + e.target.id.slice(1); // changing textContent automatically removes the other children
            // could probably remove toggled parts and have it directly change read to yesRead since toggled was used to have readStatus match the replace
            // const existingText = bookCard.innerHTML;
            // bookCard.innerHTML = existingText.replace(bookInfo.title + " by " + bookInfo.author + ", " + bookInfo.pages + " pages, " + readStatus, e.target.id[0].toUpperCase() + e.target.id.slice(1));
            // this.removeChild(this.querySelector(".removeBook"));
            // this.removeChild(this.querySelector(".toggleBtn"));
        })
    })
}

const container = document.querySelector("#container")

function createBookDivs() {
    const children = container.querySelectorAll("*");
    children.forEach((bookCard) => {
        bookCard.remove()
    })
    for (let i = 1; i < myLibrary.length + 1; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.textContent = "Book" + i;
        bookCard.setAttribute("id", "book" + i)
        container.appendChild(bookCard);
    };
    addHoverDisplay();
}

const formContainer = document.querySelector("#formContainer")
const newBookBtn = document.querySelector("#newBookBtn")
newBookBtn.addEventListener("click", () => {
    myLibrary.forEach((book, bookIndex) => {
        if (book.data == false) {
            myLibrary.splice(bookIndex, 1);
        }
    })
    if (formContainer.children.length == 0) {
        container.style.gridColumn = "1 / 2";
        const newForm = document.createElement("form");

        const labelTitle = document.createElement("label")
        labelTitle.setAttribute("for", "title")
        labelTitle.textContent = "Title"
        newForm.appendChild(labelTitle)
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "title")
        inputTitle.setAttribute("name", "title");
        inputTitle.setAttribute("placeholder", "The Hobbit")
        newForm.appendChild(inputTitle)

        const labelAuthor = document.createElement("label")
        labelAuthor.setAttribute("for", "author")
        labelAuthor.textContent = "Author"
        newForm.appendChild(labelAuthor)
        const inputAuthor = document.createElement("input");
        inputAuthor.setAttribute("type", "text");
        inputAuthor.setAttribute("id", "author")
        inputAuthor.setAttribute("name", "author");
        inputAuthor.setAttribute("placeholder", "J.R.R. Tolkien")
        newForm.appendChild(inputAuthor)

        const labelPages = document.createElement("label")
        labelPages.setAttribute("for", "pages")
        labelPages.textContent = "Pages"
        newForm.appendChild(labelPages)
        const inputPages = document.createElement("input");
        inputPages.setAttribute("type", "text");
        inputPages.setAttribute("id", "pages")
        inputPages.setAttribute("name", "pages");
        inputPages.setAttribute("placeholder", "295")
        newForm.appendChild(inputPages)

        const legendRead = document.createElement("legend");
        legendRead.textContent = "Have you read this book?"
        newForm.appendChild(legendRead)

        const inputRead = document.createElement("input");
        inputRead.setAttribute("type", "radio");
        inputRead.setAttribute("id", "yesRead")
        inputRead.setAttribute("name", "read");
        inputRead.setAttribute("value", "yesRead")
        newForm.appendChild(inputRead)
        const labelRead = document.createElement("label")
        labelRead.setAttribute("for", "yesRead")
        labelRead.textContent = "Yes"
        newForm.appendChild(labelRead)

        const inputNotRead = document.createElement("input");
        inputNotRead.setAttribute("type", "radio");
        inputNotRead.setAttribute("id", "notRead")
        inputNotRead.setAttribute("name", "read");
        inputNotRead.setAttribute("value", "notRead")
        inputNotRead.setAttribute("checked", true)
        newForm.appendChild(inputNotRead)
        const labelNotRead = document.createElement("label")
        labelNotRead.setAttribute("for", "notRead")
        labelNotRead.textContent = "No"
        newForm.appendChild(labelNotRead)

        const submitbtn = document.createElement("input");
        submitbtn.setAttribute("type", "submit");
        submitbtn.setAttribute("value", "Add Book");
        newForm.appendChild(submitbtn)

        formContainer.appendChild(newForm)
        newForm.addEventListener("submit", function (event) {
            event.preventDefault();
            title = inputTitle.value;
            author = inputAuthor.value;
            pages = inputPages.value;
            read = document.querySelector('input[name="read"]:checked').value;
            addBookToLibrary(title, author, pages, read)
            this.remove();
            container.style.gridColumn = "1 / 3";
        })
    }
})


