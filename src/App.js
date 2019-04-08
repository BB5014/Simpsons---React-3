import React, { Component } from "react";
import logo from "./logo.svg";
import logo2 from  "./logo2.jpg";
import  "./App.css";

import Quote from "./Quote.js";
import Quotes from "./Quotes.js";
import Lamp from "./Lamp.js";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working: false
  };
}

handleClick = () => {
  this.setState({ working: !this.state.working });
};

  render() {
    const working = this.state.working ? "true" : "false";
    const workinglogo = this.state.working ? logo : logo2;
    const workingcss = this.state.working ? 'App-logo' : 'App-logo2';

  return (
      <div className="App">

            
           
      
    
        
        <header className="App-header">
          <img src={workinglogo} className={workingcss} alt="logo" />
          <h1 workinglogo="App-title">Simpsons Quotes</h1>
        </header>

        <button onClick={this.handleClick} className={working}>
              {working.toUpperCase()}
            </button>
            <figure className={working} />
        <Quote
          quote="I believe the children are the future ...Unless we stop them now !"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossilbe"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
           <Lamp on />
          <Lamp /> 
        <Quotes />
      </div>
      
      );
    }
  }
  
  export default App;
