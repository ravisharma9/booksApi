const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://bookuser:book123@cluster0.aumtfk4.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.post('/books', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const { title, author, summary } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookId, { title, author, summary }, { new: true });
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndRemove(bookId);
    if (deletedBook) {
      res.json({ message: 'Book deleted successfully' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
