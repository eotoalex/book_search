import React from 'react';
import Nav from "../components/Nav";
import JumboTron from "../components/JumboTron";

class Home extends React.Component{
  render() {
    return (
      <div className="App">
        <Nav/>
        <JumboTron/>
      </div>
    );
  };
};

export default Home;