const modal = document.getElementById("modal");
const createBtn = document.getElementById("create-btn");
const closeModal = document.getElementById("close-modal");
const bookForm = document.getElementById("book-form");
const bookListContainer = document.getElementById("books");
const totalPriceElement = document.getElementById("total-price");

let editBookId = null;
const API_URL = "http://localhost:3000/api/books";

createBtn.onclick = function () {
  document.getElementById("modal-title").innerText = "Додати книгу";
  bookForm.reset();
  editBookId = null;
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

async function loadBooks(sort = "") {
  const res = await fetch(`${API_URL}${sort ? `?sort=${sort}` : ""}`);
  const data = await res.json();
  renderBooks(data);
  calculateTotalPrice();
}

async function saveBook() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = parseInt(document.getElementById("book-pages").value);
  const price = parseFloat(document.getElementById("book-price").value);
  const image = document.getElementById("book-image").value;

  if (!title || !author || !pages || !price) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const bookData = { title, author, pages, price, image };

  if (editBookId) {
    await fetch(`${API_URL}/${editBookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });
  }

  modal.style.display = "none";
  loadBooks();
}

async function deleteBook(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadBooks();
}

function renderBooks(books) {
  bookListContainer.innerHTML = "";
  books.forEach((book) => {
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

async function editBook(id) {
  const res = await fetch(API_URL);
  const books = await res.json();
  const book = books.find((b) => b.id === id);
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

function searchBooks() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  fetch(API_URL)
    .then((res) => res.json())
    .then((books) => {
      const filtered = books.filter((b) =>
        b.title.toLowerCase().includes(searchInput)
      );
      renderBooks(filtered);
    });
}

function clearSearch() {
  document.getElementById("search-input").value = "";
  loadBooks();
}

function sortBooks() {
  const sortOption = document.getElementById("sort").value;
  loadBooks(sortOption);
}

async function calculateTotalPrice() {
  const res = await fetch(`${API_URL}/total-price`);
  const data = await res.json();
  totalPriceElement.innerText = `${data.totalPrice}₴`;
}

window.onload = function () {
  loadBooks();
};
