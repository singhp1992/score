import React from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'

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

  //id counter 
  prevPlayerId = 4;

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    });
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
          players={this.state.players}
        />

        {/* Player List */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;

// delete index props in player tag if you dont use the handlescorechange fcn in counter class
