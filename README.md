# Google Book Search
With Google Book Search, you can search any book on the google books database. You can save books that you have viewed, delete from your saved books page and/or view more information about the saved book as well.

# Technologies
* Javascript
* MongoDB
* NodeJs
* Mongoose
* Dotenv
* Axios
* Express
* React
* React-Router-Dom
* HTML
* CSS
* Google Books API
* Heroku
* MLab


# Development

While developing this application, I found that working with both the React server and the Express server locally and during production brought many challenges. It became apparent that I needed to find a way to get around all the CORS errors by putting my dotenv reference to the Mlab database URI before the local reference to the MongoDB database in the server.js file. 

Working with data from my own API was difficult to acquire without getting a CORS error, so I had to create proxy in the react side package.json to get around this issue. I then had issues with the React components not rendering in Heroku's production, which was solved by going into the package.json in the server.js side to let Heroku do a post build for the React components to load properly.

# Links
* [GitHub](https://github.com/eotoalex/book_search)
* [Heroku](https://blooming-hollows-91552.herokuapp.com/)


