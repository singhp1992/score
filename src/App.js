import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

class App extends Component {
  render() {
    return (
      <div className="scoreboard" id="root">
        <Header title="Scoreboard" totalPlayers={1} />
        <Player name="Preeti" />
      </div>
    );
  }
}

export default App;
