import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import SavedBooks from './SavedBooks';
import Form from './Form'

class Nav extends React.Component{
    
    render(){
        return(
            <div>
                <nav>
                <Router>
                    <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/saved_books"}>My Saved Books</Link></li>

                    </ul>
                    <Route exact path="/" component={Form}></Route>
                    <Route exact path="/savedbooks" component={SavedBooks}></Route>
                </Router>
                </nav>
            </div>
        )
    }
}

export default Nav;