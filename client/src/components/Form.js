import React from 'react';

  let inputStyles = {
    margin:"10px"
  };

class Form extends React.Component {
    render(){
        return(
        <div>
            <form>
                <input name="book_name" placeholder="Book Title" style={inputStyles}></input> 
                <br/>
                <input name="author" placeholder="Author" style={inputStyles}></input>
            </form>
        </div>
            
        );
    }
};

export default Form;