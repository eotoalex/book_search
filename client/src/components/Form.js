import React from 'react';

  let inputStyles = {
    margin:"10px"
  };

class Form extends React.Component {
  state = {
    book_search:"",
    author_search:"",
    results:[],
  }

  // When this component mounts search google books api for books.
  // componentDidMount(){
  //   this.searchGoogleAPI(usrQuery);
  // }

    // This targets the input event and the handleChange function is activated.
    handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState ({
        [name]:value,
      });
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
              </form>
          </div>
            
        );
    }
};
export default Form;