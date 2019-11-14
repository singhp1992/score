import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Stats players={props.players} />
            <Stopwatch />
        </header>
    );
}

export default Header