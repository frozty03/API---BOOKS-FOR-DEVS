import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({ 
    name: { type: String , required: true },
    nationality: { type: String }
}, { versionKey: false });

const authorModel = mongoose.model('authors', authorSchema);

export { authorModel, authorSchema };