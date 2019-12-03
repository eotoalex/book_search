import React from 'react';
import API from '../utils/API';

  let cardStyles = {
    width:"90%",
    margin:"20px",
    display:"block",
    color:"black"
  };
  
  let thumbNailSizing = {
    height:"200px",
    width:"300px"
  };

  let buttonStyle = {
    float:"right"
  };

  let cardTextArea = {
    backgroundColor:"gainsboro"
  };

  const handleClick = (e) => {
    let click = e.target.value;
    API.deleteSavedBook(click)
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    // window.location.reload();
    // This should rerender the page.
    //  SavedBooks.loadSavedBooks();
  }

class SavedBooks extends React.Component{
    state = {
        savedBooks:[]
    }
    componentDidMount(){
        this.loadSavedBooks();
    }

    loadSavedBooks = () => {
      API.getSavedBooks()
      .then(res => this.setState({
        savedBooks:res.data
      }))
      .catch(err => console.log(err))
    }

    renderSavedBooks = (dbData) => {
      console.log(dbData)
    let savedBooks = dbData;
    return savedBooks.map(function(book){
        const { title, author, description, image, link } = book
        return(
          
            <div>    
              <div className="card" style={cardStyles}>
                <button type="button" style={buttonStyle} onClick={handleClick} value={book._id} >Delete</button>
                <a href={link}><button type="button" style={buttonStyle} value="view">View</button></a>
                  <img src={image} className="card-img-top" alt="Some book." style={thumbNailSizing}/>
                  <div className="card-body" style={cardTextArea}>
                    <p className="card-text">{title}</p>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{description}</p>
                  </div>
              </div>
            </div>
          
          );
        
    })
};

    render(){
      console.log(this.state)
        return(
            <div>
               {this.renderSavedBooks(this.state.savedBooks)}
               Saved books
            </div>
        );
    };
};
export default SavedBooks;
