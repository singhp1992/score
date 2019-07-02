import React from 'react';
import Stats from './Stats'

function Header(props) {
    return (
        <header>
            <Stats />
            <h1>{props.title}</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

export default Header