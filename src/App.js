import React from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

class App extends React.Component {

  state = {
    players: [{
        name: "Preeti",
        score: 0,
        id: 1
      },
      {
        name: "Simon",
        score: 0,
        id: 2
      },
      {
        name: "Bani",
        score: 0,
        id: 3
      },
      {
        name: "Simi",
        score: 0,
        id: 4
      }]
  }

  handleScoreChange = (index, delta) => {
    // this.setState(prevState => {
    //   return {

    //     score: prevState.score + 1
    //   };
    // });
    console.log(delta)
  }

  // decrementScore = () => {
  //   this.setState(prevState => {
  //     return {

  //       score: prevState.score - 1
  //     };
  //   });
  // }

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
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

export default App;
