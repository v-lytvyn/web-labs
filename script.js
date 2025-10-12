let books = [];

const modal = document.getElementById("modal");
const createBtn = document.getElementById("create-btn");
const closeModal = document.getElementById("close-modal");
const bookForm = document.getElementById("book-form");
const bookListContainer = document.getElementById("books");
const totalPriceElement = document.getElementById("total-price");

let editBookId = null;

createBtn.onclick = function () {
    document.getElementById("modal-title").innerText = "Додати книгу";
    bookForm.reset();
    editBookId = null;
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

function saveBook() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = parseInt(document.getElementById("book-pages").value);
    const price = parseFloat(document.getElementById("book-price").value);
    const image = document.getElementById("book-image").value;

    if (title && author && pages && price) {
        if (editBookId !== null) {
            const index = books.findIndex(b => b.id === editBookId);
            books[index] = { id: editBookId, title, author, pages, price, image };
        } else {
            const newBook = {
                id: Date.now(),
                title,
                author,
                pages,
                price,
                image
            };
            books.push(newBook);
        }

        renderBooks(books);
        modal.style.display = "none";
    } else {
        alert("Будь ласка, заповніть усі поля!");
    }
}

function renderBooks(bookArray = books) {
    bookListContainer.innerHTML = "";
    bookArray.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.className = "book-item";
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <h3 class="book-name">${book.title}</h3>
            <p class="book-info"><strong>Автор:</strong> ${book.author}</p>
            <p class="book-info"><strong>Сторінок:</strong> ${book.pages}</p>
            <p class="book-info"><strong>Ціна:</strong> ${book.price}₴</p>
            <button class="edit-btn" onclick="editBook(${book.id})">Редагувати</button>
            <button class="remove-btn" onclick="deleteBook(${book.id})">Видалити</button>
        `;
        bookListContainer.appendChild(bookElement);
    });
}

function editBook(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        document.getElementById("modal-title").innerText = "Редагувати книгу";
        document.getElementById("book-title").value = book.title;
        document.getElementById("book-author").value = book.author;
        document.getElementById("book-pages").value = book.pages;
        document.getElementById("book-price").value = book.price;
        document.getElementById("book-image").value = book.image;
        editBookId = id;
        modal.style.display = "block";
    }
}

function deleteBook(id) {
    books = books.filter(b => b.id !== id);
    renderBooks();
}

function searchBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredBooks = books.filter(b => b.title.toLowerCase().includes(searchInput));
    renderBooks(filteredBooks);
}

function clearSearch() {
    document.getElementById("search-input").value = "";
    renderBooks();
}

function sortBooks() {
    const sortOption = document.getElementById("sort").value;
    if (sortOption === "price") {
        books.sort((a, b) => b.price - a.price);
    } else if (sortOption === "pages") {
        books.sort((a, b) => b.pages - a.pages);
    } else if (sortOption === "author") {
        books.sort((a, b) => a.author.localeCompare(b.author, 'uk'));
    }
    renderBooks();
}

function calculateTotalPrice() {
    const totalPrice = books.reduce((sum, b) => sum + b.price, 0);
    totalPriceElement.innerText = `${totalPrice}₴`;
}

window.onload = function () {
    books = [
        { id: 1, title: "Я бачу, вас цікавить пітьма", author: "Ілларіон Павлюк", pages: 664, price: 600, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/e/f/eff29e86-12de-11eb-813d-000c29ae1566_87938f31-f705-11ee-8199-005056857596.jpg" },
        { id: 2, title: "Московіада (Новітня класика)", author: "Юрій Андрухович", pages: 232, price: 474, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/5/6/5670c0fd-e99c-11ed-8183-00505684ea69_adbc97c3-e9a0-11ed-8183-00505684ea69.jpg" },
        { id: 3, title: "Нові Темні Віки. Книга 1. Колонія", author: "Макс Кідрук", pages: 904, price: 549, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/f/d/fd41bdb6-82cb-11ed-8177-0050568ef5e6_1142a109-883d-11ed-8177-0050568ef5e6.jpg" },
        { id: 4, title: "Notre Dame d'Ukraine: Українка в конфлікті міфологій", author: "Оксана Забужко", pages: 656, price: 559, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/0/7/07303c44-51e6-11e8-80f5-000c29ae1566_d35ebe2c-742d-11ea-812d-000c29ae1566.jpg" },
        { id: 5, title: "Коли відлітають серпокрильці", author: "Теа Саніна", pages: 224, price: 280, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/6/4/649456fa-78b1-11ee-818c-00505684ea69_f855f076-78b1-11ee-818c-00505684ea69.jpg" }
    ];
    renderBooks();
}
