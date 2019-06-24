import React from 'react';
import props from "react"

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

export default Header