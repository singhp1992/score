import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}