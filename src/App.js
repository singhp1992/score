import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

const players = [{
  name: "Guil",
  score: 50
},
{
  name: "Treasure",
  score: 85
},
{
  name: "Ashley",
  score: 95
},
{
  name: "James",
  score: 80
}
]

class App extends Component {
  render(props) {
    return (
      <div className="scoreboard" id="root">
        <Header title="Scoreboard" totalPlayers={1} />

        {/* Player List */}
        {props.players.map( player => 
          <Player 
            name="Preeti" 
            score={0} 
          />
        )}


        
        <Player name="Bani" score={8} />
        <Player name="Simi" score={7} />
        <Player name="Simon" score={5} />
      </div>
    );
  }
}

export default App;
