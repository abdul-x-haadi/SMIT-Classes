let books = JSON.parse(localStorage.getItem("books")) || [];
function addABook(){
    let bookTitle = prompt("Add Book Name : ");
    let authorName = prompt("Add Author Name : ");
    let category = prompt("Add Book Category : ");
    let bookId = prompt("Add Book ID : ");
    let publicationYear = prompt("Add Publication Year : ");
    let availabilityStatus = prompt("Add Availability Status : (Available / Issued)");

    if(!bookTitle || !authorName || !category || !bookId || !publicationYear || !availabilityStatus){
        alert("Please fill all the fields.");
        return;
    }
    else{
        let newBook = {
            title: bookTitle,
            author: authorName,
            category: category,
            id: bookId,
            publicationYear: publicationYear,
            availabilityStatus: availabilityStatus
        };
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
        alert(bookTitle + " added successfully!");
        displayBooks();
    }
}

let bookInformation = document.querySelector("#books-information");
function displayBooks(){
    bookInformation.innerHTML = "";

    books.forEach((user, index)=>{
        bookInformation.innerHTML += `
        <tr>
            <td>${user.title}</td>
            <td>${user.author}</td>
            <td>${user.category}</td>
            <td>${user.id}</td>
            <td>${user.publicationYear}</td>
            <td>${user.availabilityStatus}</td>
            <td id="actions">
            <button class="actions-button" onclick="deleteBook(${index})">Delete</button>
            <button class="actions-button" onclick="editBook(${index})">Edit</button>
            </td>
        </tr>
        `;
    })

    if(books.length === 0){
        bookInformation.innerHTML = `
        <tr>
            <td colspan="6">No books available.</td>
        </tr>
        `;
        return;
    }

}

function deleteBook(index){
    let deleteConfirmation = prompt("Are you sure you want to delete? (y/n)");
    if(deleteConfirmation==="y" || deleteConfirmation==="Y"){
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
    }
    displayBooks();
}

function editBook(index){
    let book = books[index];
    let newTitle = prompt("Edit Book Name : ", book.title);
    let newAuthor = prompt("Edit Author Name : ", book.author);
    let newCategory = prompt("Edit Book Category : ", book.category);
    let newId = prompt("Edit Book ID : ", book.id);
    let newPublicationYear = prompt("Edit Publication Year : ", book.publicationYear);
    let newAvailabilityStatus = prompt("Edit Availability Status : (Available / Issued)", book.availabilityStatus);
    books[index] = {
        title: newTitle,
        author: newAuthor,
        category: newCategory,
        id: newId,
        publicationYear: newPublicationYear,
        availabilityStatus: newAvailabilityStatus
    };
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

function searchBooks(){
    let searchInput = prompt("Search Book Name : ");
    searchInput = searchInput.toLowerCase();
    let filteredBooks = books.filter((book)=>{
        return book.title.toLowerCase().includes(searchInput);
    });
    bookInformation.innerHTML = "";
    filteredBooks.forEach((book)=>{
        bookInformation.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.id}</td>
            <td>${book.publicationYear}</td>
            <td>${book.availabilityStatus}</td>
            <td id="actions">
            <button class="actions-button" onclick="deleteBook(${books.indexOf(book)})">Delete</button>
            <button class="actions-button" onclick="editBook(${books.indexOf(book)})">Edit</button>
            </td>
        </tr>
        `;
    });
}

function filterBooksByCategory(){
    let categoryInput = prompt("Filter by Category : ");
    categoryInput = categoryInput.toLowerCase();
    let filteredBooks = books.filter((book)=>{
        return book.category.toLowerCase() === categoryInput;
    });
    bookInformation.innerHTML = "";
    filteredBooks.forEach((book)=>{
        bookInformation.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.id}</td>
            <td>${book.publicationYear}</td>
            <td>${book.availabilityStatus}</td>
            <td id="actions">
            <button class="actions-button" onclick="deleteBook(${books.indexOf(book)})">Delete</button>
            <button class="actions-button" onclick="editBook(${books.indexOf(book)})">Edit</button>
            </td>
        </tr>
        `;
    });
}

function darkMode() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("dark-mode-button");

    if (button.innerText === "Dark Mode") {
        button.innerText = "Light Mode";
    } else {
        button.innerText = "Dark Mode";
    }
}

displayBooks();