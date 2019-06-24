import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

class App extends Component {
  render() {
    return (
      <div className="scoreboard" id="root">
        <Header />
        <Player />
      </div>
    );
  }
}

export default App;
