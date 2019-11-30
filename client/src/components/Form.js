import React from 'react';

  let inputStyles = {
    margin:"10px"
  };


//   Target event and handleChange
// handleChange = (e) => {


// };

class Form extends React.Component {
    render(){
        return(
        <div>
            {/* Do I put this handleChange thang here? */}
            {/* onChange={this.state.handleChange} */}
            <form>
                <input name="book_name" placeholder="Book Title" style={inputStyles} ></input> 
                <br/>
                <input name="author" placeholder="Author" style={inputStyles}></input>
            </form>
        </div>
            
        );
    }
};

export default Form;