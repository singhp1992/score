import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'

// class App extends Component {
//   render(props) {
//     return (
//       <div className="scoreboard" id="root">
//         <Header title="Scoreboard" totalPlayers={1} />

//         {/* Player List */}
//         {props.players.map( player => 
//           <Player 
//             name={player.name} 
//             score={player.score} 
//           />
//         )}


        
//         {/* <Player name="Bani" score={8} />
//         <Player name="Simi" score={7} />
//         <Player name="Simon" score={5} /> */}
//       </div>
//     );
//   }
// }

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
