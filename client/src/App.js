import React from 'react';
import './App.css';
import Home from "./pages/Home";
import BooksSaved from "./pages/BooksSaved"
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

   

class App extends React.Component{
  render() {
    return (
      
      <Router>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/saved_books"}>My Saved Books</Link></li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/saved_books" component={BooksSaved}></Route>
    </Router>
  );
  }
}

export default App;
