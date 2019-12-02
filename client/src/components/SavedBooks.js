import React from 'react';
import API from '../utils/API';

class SavedBooks extends React.Component{
    state = {
        savedBooks:[]
    }
    componentDidMount(){
        this.loadSavedBooks();
    }

    loadSavedBooks = () => {
        API.getSavedBooks()
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }
    render(){
        return(
            <div>
                <p>None this registers for some reason</p>
            </div>
        );
    };
};
export default SavedBooks;
