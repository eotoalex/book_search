import React from 'react';
import SavedBooks from "../components/SavedBooks";

let styles = {
  backgroundColor:"purple",
  color:"darkgray",
  height:"50%"
};

class BooksSaved extends React.Component{

  // handleClick = (e) => {
  //   let click = e.target.value;
  //   API.deleteSavedBook(click);
  //   console.log(click)
  // }
  render() {
    return (
      
      <div className="App">
        <div className="jumbotron jumbotron-fluid" style={styles}>
            <div className="container">
              <h1 className="display-4">My Saved Books</h1>
              
            </div>
        </div>
        <SavedBooks/>
      </div>
  );
  }
}

export default BooksSaved;