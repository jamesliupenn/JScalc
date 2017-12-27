import React, { Component } from 'react';
import logo from './logo.svg';
import Plus from './Plus';
import Minus from './Minus';
import Multiply from './Multiply';
import Divide from './Divide';
import Numbers from './Numbers';
import './App.css';

import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JS Calculator</h1>
        </header>
        <p className="App-intro">
          <Plus/>
          <Minus/>
          <Multiply/>
          <Divide/>
        </p>
        <Numbers/>
      </div>
    );
  }
}

export default App;
