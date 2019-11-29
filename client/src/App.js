import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Books from "./components/Books";

let styles = {
  backgroundColor:"purple",
  color:"darkgray",
};

let inputStyles = {
  margin:"10px"
};

class App extends React.Component{
  render() {
  return (
    <div className="App">
      
     <div className="jumbotron jumbotron-fluid" style={styles}>
      <div className="container">
        <h1 className="display-4">Google Book Search</h1>
        <form>
        <input name="book_name" placeholder="Book Title" style={inputStyles}></input> <br/>
        <input name="author" placeholder="Author" style={inputStyles}></input>
        </form>
      </div>
      <Books/>
    </div>


    </div>
  );
  }
}

export default App;
