import { authorModel } from "../models/authors.js";

class AuthorController {
    static async listAuthors (req, res) { 
    try {
        const authorList = await authorModel.find({});
        res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to list authors` });
        }
    }

    static async listIdAuthor (req, res) {
        try {
            const id = req.params.id;
            const idAuthor = await authorModel.findById(id);
            res.status(200).json(idAuthor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to find author` });
        }
    }

    static async registerAuthor (req, res) {
        try {
            const newAuthor = await authorModel.create(req.body);
            res.status(201).json({message: 'Book created', book: newAuthor});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - failed to create author` });
        }
    }

    static async updateAuthor (req, res) {
        try {
            const id = req.params.id;
            const updatedAuthor = await authorModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json({message: 'author updated', book: updatedAuthor});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update author` });
        }
    }

    static async deleteAuthor (req, res) {
        try {
            const id = req.params.id;
            await authorModel.findByIdAndDelete(id);
            res.status(200).json({message: 'author deleted'});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete author` });
        }
    }
};

export default AuthorController;