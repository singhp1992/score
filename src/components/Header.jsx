import React from 'react';
import Stats from './Stats'

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <Stats players={props.players} />
        </header>
    );
}

export default Header