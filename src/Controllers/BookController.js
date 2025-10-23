import booksModel from "../models/books.js";
import { authorModel } from "../models/authors.js";

class BooksController {
    static async listBooks (req, res) { // method listBooks in Class BooksController
    try {
        const booksList = await booksModel.find({}); // find wil try to find the book with no params  (mongoose function)
        res.status(200).json(booksList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to list books` });
        }
    }

    static async listIdBook (req, res) {
        try {
            const id = req.params.id;
            const idBook = await booksModel.findById(id);
            res.status(200).json(idBook);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to find book` });
        }
    }

    static async registerBook (req, res) {
        const bookInfo = req.body;
        try {
            const foundAuthor = await authorModel.findById(bookInfo.author); // "author" : (id) in the body
            const allBookInfo = {... bookInfo, author: { ... foundAuthor._doc }}; //._doc so it receiver only what we want from foundAuthor (id) and author is the name of the property defined in the book model
            const newBook = await booksModel.create(allBookInfo);
            res.status(201).json({message: 'Book created', book: newBook});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - failed to create book` });
        }
    }

    static async updateBook (req, res) {
        try {
            const id = req.params.id;
            const updatedBook = await booksModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({message: 'book updated', book: updatedBook});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update book` });
        }
    }

    static async deleteBook (req, res) {
        try {
            const id = req.params.id;
            await booksModel.findByIdAndDelete(id);
            res.status(200).json({message: 'book deleted'});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete book` });
        }
    }

    static async findBookAuthor (req, res) {
        const authorName = req.query.name; // query will find xx in the url ?authorName=xx    
        if(!authorName) {
            return res.status(400).json({
                message: 'Insert the parameter'
            });
        }
        try{
            const books = await booksModel.find({
                // "author.name" means: "search in all books,
                // go to the 'author' and inside it search for 'name'"
                // regex is to not search literally the name (Robert will find Robert Martin) and i to not be sensitive to letters (A or a)
                'author.name': { $regex: authorName, $options: 'i'}
            });
            if (books.length === 0) {
                return res.status(404).json({ message: "no book found" });
            }
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - could not search` });
        }
    }
 //  http://localhost:3000/books/search?name=test2

};


export default BooksController;