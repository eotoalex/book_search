import React from "react";
import API from "../utils/API"

let cardStyles = {
    width:"18rem"
};

class Books extends React.Component {

    state = {
        books:[]
    };
    // We have to create a default to pull from the db.

    // We need to see what the axios request pulls
    // Then we put what it pulls in the db
    // Then we render from the db
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
                <div className="card" style={cardStyles}>
                    <img src="#" class="card-img-top" alt="Some book image."/>>
                    <div className="card-body">
                    <p className="card-text">Books soon to render here.</p>
                    </div>
                </div>
            </div>
        );
    };

};

export default Books;

