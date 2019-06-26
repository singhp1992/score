import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const players = [{
  name: "Preeti",
  score: 50
},
{
  name: "Simon",
  score: 85
},
{
  name: "Bani",
  score: 95
},
{
  name: "Simi",
  score: 80
}
]

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);
