const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static("../frontend"));

let books = [
  { id: 1, title: "Я бачу, вас цікавить пітьма", author: "Ілларіон Павлюк", pages: 664, price: 600, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/e/f/eff29e86-12de-11eb-813d-000c29ae1566_87938f31-f705-11ee-8199-005056857596.jpg" },
  { id: 2, title: "Московіада (Новітня класика)", author: "Юрій Андрухович", pages: 232, price: 474, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/5/6/5670c0fd-e99c-11ed-8183-00505684ea69_adbc97c3-e9a0-11ed-8183-00505684ea69.jpg" },
  { id: 3, title: "Нові Темні Віки. Книга 1. Колонія", author: "Макс Кідрук", pages: 904, price: 549, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/f/d/fd41bdb6-82cb-11ed-8177-0050568ef5e6_1142a109-883d-11ed-8177-0050568ef5e6.jpg" },
  { id: 4, title: "Notre Dame d'Ukraine: Українка в конфлікті міфологій", author: "Оксана Забужко", pages: 656, price: 559, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/0/7/07303c44-51e6-11e8-80f5-000c29ae1566_d35ebe2c-742d-11ea-812d-000c29ae1566.jpg" },
  { id: 5, title: "Коли відлітають серпокрильці", author: "Теа Саніна", pages: 224, price: 280, image: "https://book-ye.com.ua/media/catalog/product/cache/79524a38d3bc3d0f3b6015a08841400c/6/4/649456fa-78b1-11ee-818c-00505684ea69_f855f076-78b1-11ee-818c-00505684ea69.jpg" }
];

app.get("/api/books", (req, res) => res.json(books));

app.post("/api/books", (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.get("/api/books/total-price", (req, res) => {
  const totalPrice = books.reduce((sum, b) => sum + b.price, 0);
  res.json({ totalPrice });
});

app.get("/api/books/sort/:field", (req, res) => {
  const { field } = req.params;
  const sortedBooks = [...books].sort((a, b) => {
    if (typeof a[field] === "string") return a[field].localeCompare(b[field]);
    return a[field] - b[field];
  });
  res.json(sortedBooks);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
