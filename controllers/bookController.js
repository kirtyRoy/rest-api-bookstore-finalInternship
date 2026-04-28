import Book from "../models/Book.js";

// CREATE
export const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

// GET ALL
// GET ALL (THIS is the one you just updated)
export const getBooks = async (req, res) => {
  const { page = 1, limit = 5, search = "" } = req.query;

  try {
    const books = await Book.find({
      title: { $regex: search, $options: "i" }
    })
      .limit(parseInt(limit))
      .skip((page - 1) * limit);

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
export const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// UPDATE
export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE
export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};