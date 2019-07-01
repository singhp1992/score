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

  handleRemovePlayer = (id) => {
   this.setState( prevState => {
     return {
       players: prevState.players.filter( p => p.id !== id )
     };
   });
  }


  render() {
    return (
      <div className="scoreboard" id="root">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />

        {/* Player List */}
        {this.state.players.map(player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

export default App;
