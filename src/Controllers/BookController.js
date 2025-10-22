import booksModel from "../models/books.js";

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
        try {
            const newBook = await booksModel.create(req.body);
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
};

export default BooksController;