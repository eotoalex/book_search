import React from 'react';
import Form from './Form';

let styles = {
    backgroundColor:"purple",
    color:"darkgray",
  };
class JumboTron extends React.Component{
    render(){
        return(

        <div className="jumbotron jumbotron-fluid" style={styles}>
            <div className="container">
              <h1 className="display-4">Google Book Search</h1>
              <Form/>
            </div>
        </div>
        
        )
    }
}

export default JumboTron;