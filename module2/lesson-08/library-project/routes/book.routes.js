const router = require('express').Router();
 
const Book = require('../models/Book.model.js'); // <== add this line before your routes
 
// GET route to retrieve and display all the books
router.get('/books', async (req, res, next) => {
  try {
    const allTheBooksFromDB = await Book.find();
    res.render('books/books-list.hbs', {books: allTheBooksFromDB})
  } catch (error) {
    console.log(error)
  }

    // .then(allTheBooksFromDB => {
    //   // -> allTheBooksFromDB is a placeholder, it can be any word
    //   //console.log('Retrieved books from DB:', allTheBooksFromDB);
 
    //   res.render('books/books-list.hbs', {books: allTheBooksFromDB});
    // })
    // .catch(error => {
    //   console.log('Error while getting the books from the DB: ', error);
 
    //   // Call the error-middleware to display the error page to the user
    //   next(error);
    // });
});
router.get('/books/create', (req, res) => res.render('books/book-create.hbs'));

router.post('/books/create', async (req, res, next) => {
    // console.log(req.body);
   try {
    const { title, author, description, rating } = req.body;
   
    const bookFromDB = await Book.create({ title, author, description, rating })
    console.log(`New book created: ${bookFromDB.title}.`)
    res.redirect('/books') 
   } catch (error) {
    console.log(error)
   }
   // .then(bookFromDB => {
      //   console.log(`New book created: ${bookFromDB.title}.`)
      //   res.redirect('/books')
      // })
      // .catch(error => next(error));
});

// GET route to retrieve and display details of a specific book
router.get('/books/:bookId', async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const theBook = await Book.findById(bookId);
      res.render('books/book-details.hbs', { book: theBook });
    } catch (error) {
      console.log(error)
    }
    // Book.findById(bookId)
    //   .then(theBook => res.render('books/book-details.hbs', { book: theBook }))
    //   .catch(error => {
    //     console.log('Error while retrieving book details: ', error);
   
    //     // Call the error-middleware to display the error page to the user
    //     next(error);
    //   });
  });

  // GET route to display the form to update a specific book
router.get('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
 
  Book.findById(bookId)
    .then(bookToEdit => {
      console.log(bookToEdit);
      res.render('books/book-edit.hbs', { book: bookToEdit }); 
    })
    .catch(error => next(error));
});

// POST route to actually make updates on a specific book
router.post('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
  const { title, description, author, rating } = req.body;
 
  Book.findByIdAndUpdate(bookId, { title, description, author, rating }, { new: true })
    .then(updatedBook => res.redirect(`/books/${updatedBook._id}`)) // go to the details page to see the updates
    .catch(error => next(error));
});

// POST route to delete a book from the database
router.post('/books/:bookId/delete', (req, res, next) => {
  const { bookId } = req.params;
 
  Book.findByIdAndDelete(bookId)
    .then(() => res.redirect('/books'))
    .catch(error => next(error));
});
 
module.exports = router;