import React from 'react';
import API from '../utils/API';

  let inputStyles = {
    margin:"10px"
  };

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

    // Push saved data into database.
    let savedBooks = (book) => {
      let title = book.data.items[0].volumeInfo.title;
      let author = book.data.items[0].volumeInfo.authors;
      let description = book.data.items[0].volumeInfo.description;
      let image = book.data.items[0].volumeInfo.imageLinks.smallThumbnail;
      let link = book.data.items[0].volumeInfo.previewLink;
      let bookId = book.data.items[0].id
      // console.log(title,author,description,image,link,bookId)
      API.saveBook("",{
        name:title,
        author:author,
        description:description,
        image:image,
        link:link,
        bookId:bookId
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    };

  const handleClick = (e) => {
    let click = e.target.value;
    API.getBookById(click)
    .then((res) => {
      savedBooks(res)
    })
    .catch(err => console.log(err))
    
    // console.log("ID == > ",click);
  };
const renderUserSearch = (res) => {
  let data = res;
    return data.map(function(book){
      let title = book.volumeInfo.title;
      let author = book.volumeInfo.authors;
      let description = book.volumeInfo.description;
      let image = book.volumeInfo.imageLinks.smallThumbnail;
      let link = book.volumeInfo.previewLink;
      let bookId = book.id
      // This renders the searched books into cards below the search jumbotron.
      return(
        <div>    
          <div className="card" style={cardStyles}>
            <button type="button" style={buttonStyle} onClick={handleClick} value={bookId} >Save Book</button>
            <a href={link}>
              <img src={image} className="card-img-top" alt="Some book image." style={thumbNailSizing}/>
              <div className="card-body" style={cardTextArea}>
                <p className="card-text">{title}</p>
                <p className="card-text">{author}</p>
                <p className="card-text">{description}</p>
              </div>
              </a>
          </div>
        </div>
      
      );
    });
  };

class Form extends React.Component {
  state = {
    book_search:"",
    author_search:"",
    results:[],
  }

  searchGoogleBooks = (query) => {
   // This calls this invokes the api method.
   API.getBooks(query)
   .then(res => this.setState({results:res.data.items}, function (){
   }))
   .catch(err => console.log(err))
  }

    // This targets the input event and the handleChange function is activated.
    handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState ({
        [name]:value
      });
    };

    handleFormSubmit = (e) => {
    e.preventDefault();
    var query;
    var book = this.state.book_search;
    var author = this.state.author_search;
      // User form validation.
      if(book && author){
      query = book +" "+ author;
      } else if (!book){
        query = author;
      } else if(!author){
        query = book;
      }
     this.searchGoogleBooks(query);
    };

    render(){
        return(
          <div>
              <form>
                  <input 
                    name="book_search" 
                    search = {this.state.book_search}
                    placeholder="Book Title" 
                    style={inputStyles} 
                    onChange={this.handleChange} 
                  ></input> 
                <br/>
                  <input 
                    name="author_search" 
                    search = {this.state.author_search}
                    placeholder="Author" 
                    style={inputStyles}
                    onChange={this.handleChange}  
                  ></input> 
                <br/>
                  <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                    Submit
                  </button>
              </form>
              {renderUserSearch(this.state.results)}
          </div>
            
        );
    }
};
export default Form;
