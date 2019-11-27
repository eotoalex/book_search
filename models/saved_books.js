const mongoose =require("mongoose");

const Schema = mongoose.Schema;

let SavedBooksSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    info: String
});

let SavedBooks = mongoose.model("Books", SavedBooksSchema);

module.exports = SavedBooks;