import React from 'react';
import API from '../utils/API';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "../App";




class SavedBooks extends React.Component{
    state = {
        savedBooks:[]
    }

    // componentDidMount(){
    //     this.loadSavedBooks();
    // }

    loadSavedBooks = () => {
        API.getSavedBooks()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/home" component={App}></Route>
                </Router>
            </div>
        )
    };
};
export default SavedBooks;
