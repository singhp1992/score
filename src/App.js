import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App root">
        <div className="App-header">
          <h2>Interactive Scoreboard</h2>
        </div>
        <Header />
      </div>
    );
  }
}

export default App;
