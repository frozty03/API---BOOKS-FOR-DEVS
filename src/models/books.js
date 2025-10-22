import mongoose from "mongoose";

// a schema is a object that defines the document (book)
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    avgPrice: { type: Number },
    pages: { type: Number }
}, { versionKey: false });

const booksModel = mongoose.model('books', bookSchema); // receives the name of the collection (in the mongodb atlas) and the schema
// a model represents a collection in the DB, a inteface
// so the API can interact with the documents in the collection (methods CRUD)

export default booksModel;