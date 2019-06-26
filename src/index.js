import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

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

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);
