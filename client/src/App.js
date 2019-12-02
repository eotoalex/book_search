import React from 'react';
import './App.css';
 import Nav from "./components/Nav";
import JumboTron from "./components/JumboTron";

   

class App extends React.Component{
  render() {
    return (
      
      <div className="App">
        <Nav/>
        <JumboTron/>
      </div>
  );
  }
}

export default App;
