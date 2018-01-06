import React, { Component } from 'react';
import logo from './logo.svg';
import Numbers from './Numbers';
import Display from './Display';
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
        </p>
        <Display/>
        <Numbers/>
      </div>
    );
  }
}

export default App;
