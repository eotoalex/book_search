require('dotenv').config
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const SavedBooks = require('./models/saved_books')

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"client/build")));


// // This route directs the user to the homepage.
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
    
// });

// Set up mongoose locally and for mLab.
const MONGODB_URL = "mongodb://localhost/googlebooks" || process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

var db = mongoose.connection;
db.once("open", () => {console.log('Connected')});
db.on("error", function(err){
    console.log(err);
});

// This shows the books that are saved to the database.
app.get("/api/books", function(req, res){
    SavedBooks.find({}, function(err, data){
        if(err) {console.log(err)}
        res.json(data);
    })
})

// This route posts the saved books to the database.
app.post("/api/books", function(req, res) {
    // res.send("this route is hitting")
    const savedBook = new SavedBooks({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        image:req.body.image,
        link:req.body.link
    });
    savedBook.save(function(err, book){
        if (err){console.log(err)}
        console.log(book.name + "saved to the database")
        // res.json(db.find({}))
        SavedBooks.find({}, function(err,data){
            if(err){console.log(err)}
            res.json(data)
        });
    });    
});

// This deletes the designated book from the savedbooks collection.
app.delete("/api/books/:id", (req, res) => {
    let id = req.params.id;
    SavedBooks.findOneAndRemove({_id:id}, function(err){
        if (err){
            console.log(err);
            return res.status(500).send();
        }
        console.log("An item was removed from savebooks collections id number ", id);
        return res.status(200).send();
    });  
});

    // Send every other request to the react app.
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/book-search/public/index.html"));
    });


    app.listen(PORT, () => {
        console.log(`===> API server now on port ${PORT}!`);
    })
