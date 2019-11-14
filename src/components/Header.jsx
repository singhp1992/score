import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch'

const Header = ({ players, title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Stats players={players} />
            <Stopwatch />
        </header>
    );
}

export default Header