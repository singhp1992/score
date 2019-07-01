import React from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

class App extends React.Component {

  state = {
    players: [{
        name: "Preeti",
        id: 1
      },
      {
        name: "Simon",
        id: 2
      },
      {
        name: "Bani",
        id: 3
      },
      {
        name: "Simi",
        id: 4
      }]
  }


  render() {
    return (
      <div className="scoreboard" id="root">
        <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

        {/* Player List */}
        {props.initialPlayers.map(player =>
          <Player
            name={player.name}
            key={player.id.toString()}
          />
        )}
      </div>
    )
  }
}

export default App;
