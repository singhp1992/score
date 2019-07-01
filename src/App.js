import React from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

const App = (props) => {
  return(
    <div className="scoreboard" id="root">
         <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Player List */}
      { props.initialPlayers.map( player => 
        <Player 
          name={player.name} 
          key={player.id.toString()}
        />
      )}
    </div>
  )
}

export default App;
