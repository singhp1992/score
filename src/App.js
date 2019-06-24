import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

class App extends Component {
  render() {
    return (
      <div className="scoreboard" id="root">
        <Header title="Scoreboard" totalPlayers={1} />

        {/* Player List */}
        <Player name="Preeti" score={9}/>
        <Player name="Bani" score={8} />
        <Player name="Simi" score={7} />
        <Player name="Simon" score={5} />
      </div>
    );
  }
}

export default App;
