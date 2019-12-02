import React from "react";
import API from "../utils/API"

class Books extends React.Component {

    state = {
        books:[]
    };
    // We have to create a default to pull from the db.

    // We need to see what the axios request pulls
    // Then we put what it pulls in the db
    // Then we render from the db
    componentDidMount() {
        this.loadBooks("love");
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
               
            </div>
        );
    };

};

export default Books;

