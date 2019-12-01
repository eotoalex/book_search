import React from 'react';
import './App.css';
import Books from "./components/Books";
import Form from "./components/Form"

    let styles = {
      backgroundColor:"purple",
      color:"darkgray",
    };

    // React Router Dom needs to be used
    // Express router is to be used as well.
    // Use the structure of rendering given (title, authors, description, image, link)
    // Link the books to the google books page.
    // Saved books are rendered from the database
    // Deletion is deleted from the database.

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid" style={styles}>
            <div className="container">
              <h1 className="display-4">Google Book Search</h1>
              <Form/>
            </div>
            {/* This is where the books will render from the books component */}
            
      </div>

      <Books/>
    </div>
  );
  }
}

export default App;
