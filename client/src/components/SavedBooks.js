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

    function handleClick (e){
        let click = e.target.value;
        API.deleteSavedBook(click);
        console.log(click)
    }


    function renderSavedBooks (dbData){
    let savedBooks = dbData.data;
    return savedBooks.map(function(book){
        
        let title = book.name;
        let author = book.author;
        let description = book.description;
        let image = book.image;
        let link = book.link;
        let bookId = book._id;

        // console.log(title,author,description,image, link, bookId)

        return(
            <div>    
              <div className="card" style={cardStyles}>
                <button type="button" style={buttonStyle} onClick={handleClick} value={bookId} >Delete</button>
                <a href={link}><button type="button" style={buttonStyle} value={"view"}>View</button></a>
                
                  <img src={image} className="card-img-top" alt="Some book image." style={thumbNailSizing}/>
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
class SavedBooks extends React.Component{
    state = {
        savedBooks:[]
    }
    componentDidMount(){
        this.loadSavedBooks();
    }

    loadSavedBooks = () => {
        API.getSavedBooks()
        .then(res => this.setState({savedBooks:res},function (){
            renderSavedBooks(this.state.savedBooks)
            console.log("saved =>>>",this.state.savedBooks)
        }),
        
        )
        .catch(err => console.log(err))

    }
    render(){
        return(
            <div>
               {this.loadSavedBooks()}
            </div>
        );
    };
};
export default SavedBooks;
