const express = require("express");
const router = express.Router();
const CharacterModel = require("../models/Character.model");
const BookModel = require("../models/Book.model");

router.get("/all-books", async (req, res) => {
  const allBooks = await BookModel.find();
  console.log("all the books", allBooks);
  res.render("books/all-books", { allBooks });
});
router.get("/create-a-book", async (req, res) => {
  const allCharacters = await CharacterModel.find();

  res.render("books/create-a-book", { allCharacters });
});
router.get("/book-detail/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const oneBook = await BookModel.findById(bookId).populate("cast");
  res.render("books/book-detail", { oneBook });
});
router.get("/update-book/:bookId", async (req, res) => {
  const foundBook = await BookModel.findById(req.params.bookId);
  const allCharacters = await CharacterModel.find();
  res.render("books/update-book", { foundBook, allCharacters });
});

router.post("/create-a-book", async (req, res) => {
  await BookModel.create(req.body);
  res.redirect("/books/all-books");
});
router.post("/update-a-book/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const updatedBook = await BookModel.findByIdAndUpdate(bookId, req.body, {
    new: true,
  });
  console.log("here is the updated book", updatedBook);
  res.redirect("/books/all-books");
});

module.exports = router;
