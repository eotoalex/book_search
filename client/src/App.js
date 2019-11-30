import React from 'react';
import './App.css';
import Books from "./components/Books";
import Form from "./components/Form"

    let styles = {
      backgroundColor:"purple",
      color:"darkgray",
    };

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
            <Books/>
      </div>


    </div>
  );
  }
}

export default App;
