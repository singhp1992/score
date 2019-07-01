import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const players = [{
  name: "Preeti",
  score: 50,
  id: 1
},
{
  name: "Simon",
  score: 85,
  id: 2
},
{
  name: "Bani",
  score: 95,
  id: 3
},
{
  name: "Simi",
  score: 80,
  id: 4
}
]

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);
