import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

const App = (props) => {
  return(
    <div className="scoreboard" id="root">
         <Header title="Scoreboard" totalPlayers={1} />

      {/* Player List */}
         {props.initialPlayers.map( player => 
          <Player 
            name={player.name} 
            score={player.score} 
          />
        )}
    </div>
  )
}

export default App;
